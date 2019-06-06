$(document).ready(function () {


})

function changePage(url) {
    url = url.replace('#page', '');
    $.ajax({
        type: "POST",
        url: url,
        data: 'page=' + url,
        dataType: "html",
        success: function (data) {
            $('#pageContent').html(data);

        }


    });
}

var curPrice;
var curPriceone;
var data;

function catalog() {
    var fromJson = "details.json";
    $.getJSON(fromJson, function (course) {
        var courseList = '<table class="details"><tr>';
        $.each(course.details, function () {
            courseList += '<td class ="img"><img src="' + this.imgpath + '" onclick="changePage(\'' + this.location + '\')"><h4 class="text">SGD $ :'+this.cost+'</h4></td>';
            curPrice = this.cost;
            curPriceone = this.code;



        });
        courseList += '</tr></table>';
        $('#pageContent').html(courseList);
    });
}

function updateCurrency(data) {


    var convJason = "currency.json";
    $.getJSON(convJason, function (result) {
        $.each(result.currencies, function () {

            if (data === this.code) {

                var latest = this.conversion * curPrice;
                data = data;

            }


            $('#price').html(latest);
            $('#sign').html(data);



        });
    });
}

function show() {


}


function loadHome() {
    var home = `
    <div class="text"><h1 >Who We Are</h1>

<p>Our mission is to redefine adult education through learning innovation. We are the lifelong career progression and learning partner of individuals and a total talents and training solutions provider for enterprises.

 </P>

<h1>What We Do</h1>

<p>Delivering Future Ready Talents

We provide relevant, flexible, affordable, and personalized learning programmes. Virtual, blended, and guided immersive delivery in the classroom, at the workplace, at home, and even overseas allow non-invasive learning without geographic boundaries.

 

Using innovative technology, Just-in-time learning delivery allow individuals and enterprise learners to study at their own pace, anytime and anywhere while still experiencing close mentorship and support.

 

Our work-based learning pedagogy uses real world or simulated virtual lab projects with OJT implementations to deliver tangible skills with real business outcomes.

</P> 
<h1>
Grooming Learning Enterprises</h1>

<p>We are the training and recruitment partner of enterprises. Companies benefit from our customized workplace learning on-demand, talent framework and advisory services. Talent recruitment via our "Place and Train" programmes allow companies to acquire hard to get latent talents cost effectively.

 

Our "Competency Learning as a Service" (CLaaS) platform makes workplace learning pervasive at enterprises with on demand curriculum, learning facilitation, OJT mentoring support, learning advisory and learning technology.

 
</P>
<h1>Our Measure of Success</h1>

<p>Our success is based on our ability to provide relevant learning journeys that enhances our students' job performance and delivers tangible outcomes for their employers.</P>
</div>
`

    $("#pageContent").html(home);
}
