import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './Components/Navbar'
import React, { Component } from 'react'
import Foxpic from './Components/Foxpic';
import Content from './Components/Content';
import Animation from './Components/Animation';
import Info from './Components/Info'
import Foxpic2 from './Components/Foxpic2'
import Header from './Components/Header'
import FoxOnGallery from './Components/FoxOnGallery'
import Carousel from './Components/Carousel'
import Footer from './Components/Footer'
import FoxFooter from './Components/FoxFooter'


export default class App extends Component {
	render() {
		return (
			<div>
				<div>
					<div>
						<Navbar />
					</div>
					<div id="home">
						<br />
						<div style={{ marginTop: "40px" }}>
							<br/>
							<div className="container">
								<div className="row mt-4">
									<div className="col-lg-4 mt-2">
										<h1 className="heading">WHAT DOES THE FOX MEAN?</h1>
										<Foxpic />
									</div>
									<div className="col-lg-8 mt-4">
										<Content />
									</div>
									<div style={{ position: 'absolute', marginTop: "400px" }}>
										<Animation />
									</div>
								</div>
							</div>
						</div>
					</div>
					<br />
					<div id="info" style={{ display: 'none' }}>
						<br />
						<div style={{ marginTop: "60px" }}>
							<br />
							<div className="container">
								<div className="row">
									<div className="col-lg-6">
										<Info />
									</div>
									<div className="col-lg-1"></div>
									<div className="col-lg-5">
										<Foxpic2 />
									</div>
									<div style={{ position: 'absolute', marginLeft: "600px", marginTop: "150px" }}>
										<Header herderText="INFORMATION" />
									</div>
								</div>
							</div>
						</div>
					</div>
					<br />
					<div>
						<div id="pics" style={{ display: 'none' }}>
							<br />
							<div style={{ marginTop: "100px" }}>
								<br />
								<div className="container">
									<div className="row">
										<div className="col-lg-2"></div>
										<div className="col-lg-8 text-center">
											<Header herderText="GALLERY" />
										</div>
										<div className="col-lg2"></div>
										<div style={{ position: 'absolute', marginLeft: "55%", marginTop: "-50px", zIndex: '1' }}>
											<FoxOnGallery />
										</div>
									</div>
									<br />
									<div className="row">
										<div className="col-lg-2"></div>
										<div className="col-lg-8">
											<div style={{ zIndex: '0' }}>
												<Carousel />
											</div>
										</div>
										<div className="col-lg-2"></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<footer style={{ marginTop: "200px" }}>
						<div style={{ position: 'absolute', marginLeft: "8%", marginTop: "-80px", zIndex: '1' }}>
							<FoxFooter />
						</div>
						<Footer />
					</footer>
				</div >
			</div >
		)
	}
}


