import React from 'react';

const Card = ({rowData}) => (
	<div className = "row columns">
		{
			rowData.col.map((colData) => (
				<div className = "column is-half">
					<div className="card">
						<div className="card-image">
							<figure className="image is-2by1">
							<img src={colData.img} alt="Placeholder image"/>
							</figure>
						</div>
						<div className="content">
							<table>
								<tr>
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