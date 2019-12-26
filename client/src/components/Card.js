import React from 'react';
import {Link} from 'react-router-dom';


const Card = ({rowData, setNavigation}) => (
	<div className = "row columns">
		{
			rowData.col.map((colData) => (
				<div className = "column is-half">
					<div className={"card tooltip"}>
						{
							colData.paylater ? <span class="tooltiptext">Bayar kalau udah jadi</span> : null
						}
						<Link to = {`/service/${colData.id}/${colData.title}`}  className="card-image"
							onClick = {()=>setNavigation(-1)}
						>
							<figure className="image is-2by1">
							<img src={colData.img} alt="Placeholder image"/>
							</figure>
						</Link>
						<div className="content">
							<table className = "service-detail">
								<tr >
									<td  className = "service-title">
										<h5>
										{
											colData.title
										}
										</h5>
									</td >
									<td className = "service-from">
										<p>Start from</p>
									</td>
									<td className = "service-price">
										<h4>
											Rp&nbsp;
											{
												colData.price - colData.discount
											}k
										</h4>
									</td>
								</tr>
							</table>
						</div>
					</div>
				</div>
			))
		}
	</div>
);

export default Card;