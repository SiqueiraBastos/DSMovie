import MovieCard from "components/MovieCard";
import Paginatin from "components/Pagination";

function Listing() {

    return (
        <>
            <Paginatin />

            <div className="Container">
                <div className="row">
                    <div className="col-m-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-m-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-m-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-m-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                    <div className="col-m-6 col-lg-4 col-xl-3 mb-3">
                        <MovieCard />
                    </div>
                   
                </div>
            </div>


        </>
    );
}

export default Listing;