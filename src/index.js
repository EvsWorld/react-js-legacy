import React, { Component } from 'react';
import { render } from 'react-dom';
import Tabs from './Tabs/Tabs';
import Tab from './Tabs/Tab';
import Post from './Tabs/Item';
import './Tabs/style.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      	<div className="App">
				<Tabs wrapperClassName='new-wrapper-class'>
					<Tab title="Apps">
            <h2>Apps</h2>
						<p>
							Here, you’ll find the apps that you’ve built yourself or have installed and authorised. For information about developing applications check out the documentation.
						</p>
					</Tab>
					<Tab title="Notifications">
            <h2>Notifications</h2>
						<p>
							Update your notification preferences
						</p>
					</Tab>
					<Tab title="Billing">
             <h2>Billing</h2>
						<p>
We generally don’t give out your company information, but we are required to have it on file in case a consumer has a question or complaint.
						</p>
					</Tab>
				</Tabs>
			</div>
    );
  }
}

render(<App />, document.getElementById('root'));
