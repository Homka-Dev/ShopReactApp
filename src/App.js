import React from 'react'
import Header from "./compones/Header";
import Footer from './compones/Footer';
import Items from './compones/Items';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			items: [
				{
					id: 1,
					title: "Крісло",
					img: "item.jpg",
					desc: "lorem ipsum dolor sit amet, consectetur adipising",
					category: "tables",
					price: "49.99"
				},
				{
					id: 2,
					title: "Крісло",
					img: "item.jpg",
					desc: "lorem ipsum dolor sit amet, consectetur adipising",
					category: "tables",
					price: "49.99"
				},
				{
					id: 3,
					title: "Крісло",
					img: "item.jpg",
					desc: "lorem ipsum dolor sit amet, consectetur adipising",
					category: "tables",
					price: "49.99"
				},
				{
					id: 4,
					title: "Крісло",
					img: "item.jpg",
					desc: "lorem ipsum dolor sit amet, consectetur adipising",
					category: "tables",
					price: "49.99"
				},
				{
					id: 5,
					title: "Крісло",
					img: "item.jpg",
					desc: "lorem ipsum dolor sit amet, consectetur adipising",
					category: "tables",
					price: "49.99"
				},
				{
					id: 6,
					title: "Крісло",
					img: "item.jpg",
					desc: "lorem ipsum dolor sit amet, consectetur adipising",
					category: "tables",
					price: "49.99"
				}
			]
		}
	}
	render() {
		return (
			<div className="wrapper">
				<Header />
				<Items items={this.state.items}/>
				<Footer />
			</div>
		)
	}
}

export default App