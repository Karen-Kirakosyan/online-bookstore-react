import './newsFooter.css'

function FooterNews() {
  return (
    <footer>
      <div class="footer-area-bottom" style={{ backgroundColor: '#6c7279' }}>
        <div class="container" style={{ backgroundColor: 'darkgray' }}>
          <div class="row">
            <div class="col-md-12" />
          </div>
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <div class="credits">
                <a href="#">Privacy Policy</a> |{' '}
                <a href="#">Terms & Condition</a>
              </div>
              <div class="copyright text-center">
                <p>
                  &copy; Copyright 2021. |{' '}
                  <strong>
                    <a
                      href="#"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      Hand Library{' '}
                    </a>
                  </strong>{' '}
                  | All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterNews
