import Navbar from '../NavBar/NavBar';
import './Home.css'; 
function Home() {
    return (
        <div className="bg-light-purple">
            <Navbar />

            {/* Welcome Section */}
            <div className="container my-5">
                <div className="jumbotron bg-purple text-white rounded shadow-lg">
                    <h1 className="display-4">Welcome to Dashboard Project!</h1>
                    <p className="lead">This is a simple dashboard application. Log in to explore more features or sign up if you're a new user.</p>
                    <hr className="my-4 bg-light" />
                    <p>If you have any questions, feel free to reach out!</p>
                    <div className="mt-4">
                        <a className="btn btn-light btn-lg mr-3 shadow" href="/login" role="button">Log In</a>
                        <a className="btn btn-dark btn-lg shadow" href="/signup" role="button">Sign Up</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
