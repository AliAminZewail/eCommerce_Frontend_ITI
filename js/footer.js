const createFooter = () => {
    let footer = document.querySelector("footer");
    footer.innerHTML = `
<div class="footer-social-container">

    <div>
    <a href="" class="social-link">terms & services</a>
    <a href="" class="social-link">privacy page</a>
    </div>

    <div>
    <a href="" class="social-link">instagram</a>
    <a href="" class="social-link">facebook</a>
    <a href="" class="social-link">twitter</a>
    </div>

    </div>
    <p class="footer-credit">Best apparels online store</p>    
    `;
}

createFooter();