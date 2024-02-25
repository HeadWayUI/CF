import React from 'react';
import Heder from '../shared/Heder';
import Footer from '../shared/Footer';
import { useState, useEffect } from 'react';

const Blog = () => {
    const [article, setArticle] = useState([]);
        const [loading, setLoading] = useState(true);
        const baseUrl = "http://ec2-13-51-102-167.eu-north-1.compute.amazonaws.com:9090"


        
        useEffect(() => {
            const fetchArticles = async () => {
              try {
                const response = await fetch(baseUrl + '/api/articles/all'); // Replace with your API endpoint
                if (!response.ok) {
                  throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setArticle(data);
              } catch (error) {
                console.error('Error fetching user data:', error);
              } finally {
                setLoading(false);
              }
            };
            fetchArticles();
        }, []);
    return (
        <>
        <Heder />
        <h1 style={{ textAlign: "center" }}>All Articles</h1>
            <div className ="site-section bg-light">
                <div className ="container">
                    <div className ="row">
                    {article.map((article) => ( 
                        <div className ="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0" key={article.id}>
                            <div className ="post-entry">
                                <a href="blog-single.html" className ="mb-3 img-wrap">
                                    <img src={article.image} alt="Image placeholder" className ="img-fluid" />
                                </a>
                                <h3><a href="#">{article.title}</a></h3>
                                {/* <span className ="date mb-4 d-block text-muted">July 26, 2018</span> */}
                                <p>{article.description}</p>
                                {/* <p><a href="#" className ="link-underline">Read More</a></p> */}
                            </div>
                        </div>
                         ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog
