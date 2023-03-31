import { Link } from "react-router-dom"

export default function WebsDetail({ webs }) {

	return (
		<>
			<div className='card text-center'>
				{webs.map((result) => {
					return (
						<div key={result.id} >
							<div  className='card-header'>
								id: {result.customerId} - Name: {result.url}
							</div>
							<div  className='card-body testeando'>
								<h5 className='card-title'>{result.id}</h5>
								<p className='card-text'>Creator: {result.createdBy}</p>
								<div>
									<Link
										to={'/customers/' + result.customerId}
										customer={webs}
										className='btn btn-primary'
									>
										Edit
									</Link>
								</div>
							</div>
						</div>
					);
				})}
				<div className='card-footer text-body-secondary'></div>
			</div>
		</>
	);
}
