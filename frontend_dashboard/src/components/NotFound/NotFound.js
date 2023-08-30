import "./NotFound.css";

const NotFound = () => {
  return (
    <section class="page_404 d-flex justify-content-center align-items-center">
      <div class="container text-center">
        <div class="row justify-content-center">
          <div class="col-10">
            <div class="four_zero_four_bg">
              <h1>404</h1>
            </div>
            <div class="contant_box_404">
              <h3>Looks like you're lost...</h3>
              <p>the page you are looking for not available!</p>
    
              <a href="/login" class="link_404 btn btn-success">
                Go to Home
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
