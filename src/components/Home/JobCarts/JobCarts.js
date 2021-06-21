import React, { useState } from "react";
import { useEffect } from "react";
import "./JobCarts.css";
import ReactPaginate from "react-paginate";

const JobCarts = () => {
  const [jobs, setJobs] = useState([]);

  const [search, setSearch] = useState("");
  console.log(search);
  const status = "approved";

  useEffect(() => {
    fetch("https://peaceful-hamlet-87315.herokuapp.com/allJobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status, search }),
    })
      .then((res) => res.json())
      .then((data) => {
        setJobs(data);
        console.log(data);
      });
  }, [search]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 20;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = jobs
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((pd) => {
      return (
        <div className="col-md-6 col-lg-6 col-sm-12">
          <div className="text-center">
            <div className="carts">
              <h2>{pd.companyName}</h2>
              <h5 style={{ color: "red" }}>{pd.positionName}</h5>
              <p>
                <small>@ {pd.recruiterName}</small>
              </p>
              <div className="row">
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h6>Description</h6>
                  <p>{pd.description}</p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                  <h6>Requirements</h6>
                  <p>{pd.requirements}</p>
                </div>
              </div>
              <button className="btn btn-info w-50 mt-3">Apply</button>
            </div>
          </div>
        </div>
      );
    });
  const pageCount = Math.ceil(jobs.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div>
      <div className="search-div mt-5">
        <input onBlur={handleSearch} type="text" className="search-box" />
        <button onClick={handleSearch} className="btn btn-info search-btn">
          Search
        </button>
      </div>
      <div className="row mt-4 ">
        {displayUsers}
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttns"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
};

export default JobCarts;
