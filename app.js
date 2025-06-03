require('dotenv').config();  // Load environment variables from .env file
const { API_BASE_URL , WEBSITE_ID_KEY} = require('./config/config');
const { getWebsiteID } = require('./utils/helper');
const { getHomeDesktopBanner ,gettestimonial ,getAdBanner,getHomepopupBanner,getjobs,getotherjobs,getjobdetails ,getclientle ,getfeaturedin } = require('./controller/homecontroller');
const { getBlog ,getBlogfull,getrelatedposts, getevents ,getposts} = require('./controller/blogcontroller');
const { getgallery,getLatestGalleryImages} = require('./controller/gallerycontroller');
const { CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS ,CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS , BOOKING_ENQUIRY_DYNAMIC_FIELDS_KEYS} = require('./config/config');

const express = require('express');
const path = require('path');
const app = express();
const port = 3005;
const metaLogoPath = "/assets/images/metalogo.png";
// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); // Define the views directory

// Serve static files (like CSS, images) from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const websiteID = await getWebsiteID(); 
    const banners = await getHomeDesktopBanner();
    const testimonial = await gettestimonial();
    const posts = await getposts();
    const feat = await getfeaturedin();
    const gallery= await getgallery();
    const clients = await getclientle();
    const popupbanners = await getHomepopupBanner();
   const latestImages = await getLatestGalleryImages();
   const seoDetails = {
    title: "INSD Raipur | Premier Design Institute in Chhattisgarh",
    metaDescription: "Join INSD Raipur, a global leader in design education offering Fashion, Interior, Graphic, Animation, Photography & Digital Marketing courses.",
    metaImage: `${baseUrl}/${metaLogoPath}`,
    keywords: "insd raipur, design institute raipur, fashion design raipur, interior design chhattisgarh, graphic design course, animation school india, photography classes, digital marketing raipur, top design college, insd branches",
    canonical: ``,
};

   
   
    res.render('index', {body: "",baseUrl,feat,latestImages,posts, websiteID,popupbanners,testimonial,gallery,clients, API_BASE_URL,WEBSITE_ID_KEY, seoDetails,banners});
});


app.get('/about', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "About INSD Raipur | Premier Design Institute in Chhattisgarh",
        metaDescription: "Learn about INSD Raipur, established in 2013 to offer international design education in Chhattisgarh. Discover our mission, vision, and impact.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: " INSD Raipur, design institute Chhattisgarh, about INSD, design education",
        canonical: `/about`,
    };
    
   
    res.render('about', {body: "",baseUrl, seoDetails});
});



app.get('/courses', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const testimonial = await gettestimonial();
    const clients = await getclientle();
    const seoDetails = {
        title: "Design Courses at INSD Raipur | Explore Your Creative Path",
        metaDescription: "Browse all design courses offered by INSD Raipur including fashion, interior, animation, UI/UX, and more..",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "design courses Raipur, INSD programs, creative courses Chhattisgarh",
        canonical: `/courses`,
    }; 
   
    res.render('courses', { body: "", baseUrl,clients,testimonial, seoDetails });
});

app.get('/fashion-designing', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: " Fashion Design Course | INSD Raipur",
        metaDescription: "Learn fashion designing at INSD Raipur with an international curriculum, expert mentors, and industry exposure.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "fashion design course Raipur, fashion designing institute, INSD fashion program",
        canonical: `/fashion-designing`,
    }; 
   
    res.render('fashiondesigning', { body: "", baseUrl, seoDetails });
});

app.get('/interior-designing', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "Interior Design Course | INSD Raipur",
        metaDescription: "Enroll in INSD Raipur’s interior design course to master aesthetics, space planning, and interior creativity.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "interior design course, space design, interior decorating training",
        canonical: `/interior-designing`,
    }; 
   
    res.render('interior', { body: "", baseUrl, seoDetails });
});


app.get('/graphic-designing', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "Graphic Design Course | INSD Raipur",
        metaDescription: "Discover the innovative curriculum at Alphabetz Preschool Dongargarh, designed to nurture creativity, cognitive skills, and social growth through play-based learning.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "Preschool curriculum, Best curriculum for kids, Play-based learning, Early childhood education, Learning through play, Kindergarten syllabus, Montessori approach",
        canonical: `/graphic-designing`,
    }; 
   
    res.render('graphic', { body: "", baseUrl, seoDetails });
});

app.get('/photography', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "Photography Course | INSD Raipur",
        metaDescription: "Master the art of photography with professional training at INSD Raipur. From basics to advanced techniques.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "photography institute, Raipur photography course, creative photography training",
        canonical: `/photography`,
    }; 
   
    res.render('photography', { body: "", baseUrl, seoDetails });
});

app.get('/digital-marketing', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "Digital Marketing Course | INSD Raipur",
        metaDescription: "Become a digital marketing expert with INSD Raipur’s industry-focused training. SEO, social media & more.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: " digital marketing training Raipur, SEO course, online marketing course",
        canonical: `/digital-marketing`,
    }; 
   
    res.render('digital', { body: "", baseUrl, seoDetails });
});


app.get('/uiux-designing', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "UI/UX Design Course | INSD Raipur",
        metaDescription: "Learn user interface and experience design at INSD Raipur. Get hands-on with real tools and projects.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "UI UX training, user experience course, web design Raipur",
        canonical: `/uiux-designing`,
    }; 
   
    res.render('uiux', { body: "", baseUrl, seoDetails });
});

app.get('/event-management', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "Event Management Course | INSD Raipur",
        metaDescription: "Start your career in event planning with INSD Raipur’s event management course. Learn coordination, planning & execution.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "event planning course, event management training, INSD event course",
        canonical: `/event-management`,
    }; 
   
    res.render('event-mgmt', { body: "", baseUrl, seoDetails });
});



app.get('/animation-designing', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "Animation Design Course | INSD Raipur",
        metaDescription: " Learn 2D/3D animation and motion graphics with INSD Raipur’s animation design program. Ideal for creative storytellers.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "animation design course, 3D animation, animation institute Raipur",
        canonical: `/animation-designing`,
    }; 
   
    res.render('animation', { body: "", baseUrl, seoDetails });
});





app.get('/admission', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const websiteID = await getWebsiteID();
    const clients = await getclientle();
    const blogs = await getBlog();
    const seoDetails = {
        title: "Apply to INSD Raipur | Admissions Open for Design Courses",
        metaDescription: "Start your design journey at INSD Raipur. Apply now for fashion, interior, graphic, and other creative courses.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "apply INSD Raipur, design course admission, creative careers, design school admission",
        canonical: `/admission`,
    }; 
   
    res.render('admission', { body: "", baseUrl,blogs,clients, websiteID, API_BASE_URL, WEBSITE_ID_KEY, BOOKING_ENQUIRY_DYNAMIC_FIELDS_KEYS, seoDetails });
});


// app.get('/joblisting', async (req, res) => {
//     const jobs = await getjobs();
//       const baseUrl = req.protocol + '://' + req.get('Host');
//       const testimonial = await gettestimonial();
//       const seoDetails = {
//           title: "",
//           metaDescription: "",
//           metaImage: `${baseUrl}/${metaLogoPath}`,
//           keywords:"",
//           canonical:"",
//       } 
     
//       res.render('joblisting', {body: "", seoDetails,jobs,testimonial});
//   });
  
//   app.get('/listing-enquiry/:slug', async (req, res) => {
//       const jobs = await getjobs();
//       const { slug } = req.params;
//         const baseUrl = req.protocol + '://' + req.get('Host');
//         const websiteID = await getWebsiteID(); 
//         const jobdetails =await getjobdetails(slug);
//         const otherjobs = await getotherjobs(slug);
//         const seoDetails = {
//             title: "",
//             metaDescription: "",
//             metaImage: `${baseUrl}/${metaLogoPath}`,
//             keywords:"",
//             canonical:"",
//         } 
       
//         res.render('listing-details', {body: "", websiteID,API_BASE_URL,WEBSITE_ID_KEY,seoDetails,jobs,otherjobs,jobdetails,CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS});
//     });
  
  


app.get('/gallery', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const gallery = await getgallery();
    
    const seoDetails = {
        title: " INSD Raipur Gallery | Student Work, Events & Campus Life",
        metaDescription: "View highlights of student projects, campus events, and creative life at INSD Raipur through our vibrant image gallery.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "INSD gallery, design student work, campus photos, Raipur institute",
        canonical: `/gallery`,
    };

    res.render('gallery', { body: "", gallery, seoDetails });
});


app.get('/contact', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const websiteID = await getWebsiteID(); 
  const blogs = await getBlog();
  const clients = await getclientle();
    const seoDetails = {
        title: "Contact INSD Raipur | Reach Us for Admissions & Queries",
        metaDescription: "Have questions? Contact INSD Raipur for admission inquiries, course details, and career opportunities in design.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "contact INSD Raipur, design course inquiry, admission help, institute address",
        canonical: `/contact`,
    };

    res.render('contact', { body: "", websiteID, API_BASE_URL,blogs, clients, WEBSITE_ID_KEY, CONTACT_ENQUIRY_DYNAMIC_FIELDS_KEYS, seoDetails });
});
app.get('/career', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const websiteID = await getWebsiteID();
    
    const seoDetails = {
        title: "Career Opportunities | INSD Raipur",
        metaDescription: "Join the creative team at INSD Raipur. Explore teaching, administrative, and industry roles.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "careers at INSD, job openings Raipur, design faculty, institute jobs",
        canonical: `/career`,
    };

    res.render('career', { body: "", seoDetails, websiteID, API_BASE_URL, WEBSITE_ID_KEY, CAREER_ENQUIRY_DYNAMIC_FIELDS_KEYS });
});


app.get('/blogs', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
  
    const blogs = await getBlog();
    const seoDetails = {
        title: "INSD Raipur Blog | Design Trends, Tips & Student Stories",
        metaDescription: "Explore the latest in fashion, interior, graphic, and digital design with blogs from INSD Raipur. Insights, student stories, and industry tips.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: "design blogs, fashion trends, graphic design tips, student stories, INSD Raipur blog",
        canonical: `/blogs`,
    };

    res.render('blogs', { body: "", blogs, baseUrl, seoDetails });
});


app.get('/events', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
  
    const event = await getevents();
    const seoDetails = {
        title: " Events at INSD Raipur | Design Shows, Workshops & More",
        metaDescription: " Stay updated with events at INSD Raipur – from fashion shows to guest lectures and workshops. Discover opportunities to learn and network.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: " design events Raipur, fashion shows, design workshops, INSD events",
        canonical: `/events`,
    };

    res.render('events', { body: "", event, baseUrl, seoDetails });
});


app.get('/thankyou', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "Thank You for Contacting Us | Your Request Has Been Received",
        metaDescription: "Thank you for reaching out to INSD. We have received your request and will get back to you shortly. Stay tuned for further updates.",
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords:"Thank you page, request confirmation,Thank you message ",
        canonical:"/thankyou",
    } 
    res.render('thankyou', {body: "",seoDetails});
});




app.get('/detail/:slug', async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const { slug } = req.params; // Extract slug from params
    const relatedposts = await getrelatedposts(slug);
    const blogfull = await getBlogfull(slug);
    const testimonial = await gettestimonial();
    const websiteID = await getWebsiteID(); 
   
    const adbanner = await getAdBanner();
    const blogs = await getBlog();
    // Extract the first 50 words from the description
    const truncateToWords = (text, wordCount) => {
        if (!text) return '';
        return text.split(' ').slice(0, wordCount).join(' ') + '...';
    };
    const truncatedDescription = truncateToWords(blogfull?.description, 25);

    // Set the meta image dynamically
   
  
    const seoDetails = {
        title: blogfull?.title,
        metaDescription: truncatedDescription, // Use the truncated description
        metaImage: `${baseUrl}/${metaLogoPath}`,
        keywords: `${blogfull.seoDetails.tags}`,
        canonical:`/detail/${slug}`,
    };

    res.render('blogpost', {
        body: "",
       baseUrl,
        blogfull,
        relatedposts,
        seoDetails,
        adbanner,
        blogs,
       testimonial,websiteID,API_BASE_URL,WEBSITE_ID_KEY, BOOKING_ENQUIRY_DYNAMIC_FIELDS_KEYS
    });
});

app.use(async (req, res, next) => {
    const baseUrl = req.protocol + '://' + req.get('Host');
    const seoDetails = {
        title: "404 - Page Not Found | INSD Raipur",
        metaDescription: "Sorry, the page you are looking for cannot be found. Please check the URL or visit our homepage for more information.",
        metaImage: `${baseUrl}/assets/images/metalogo.png`, // Replace with correct path if needed
        keywords: "404 page not found,  page not found, Error page , error",
        canonical: `/404`, // You can use the original URL for canonical
    };
    

    res.status(404).render('404', { seoDetails });
});




app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });