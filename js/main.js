'use strict'

$().ready(onInit())

function onInit() {
    renderProjects()
    //TODO: Add the 
}

function renderProjects(){
    const projects = getProjects()
    var strHTMLs = projects.map(project => {
        return`
        <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" data-project-id="${project.id}">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
            </a>
            <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
        </div>
      </div>
        `
    })
    $('.protfolios-list').html(strHTMLs)
}
