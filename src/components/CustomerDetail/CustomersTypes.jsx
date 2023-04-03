import { Link } from 'react-router-dom';

export default function CustomersTypes({ types }) {
	return (
		<div className='containerCard'>
			{types === true && <h3>Customer Types</h3>}
			{types.map((result) => {
				return (
					<div key={result.id} className='card text-center'>
						<div>
							<div className='card-header'>
								id: {result.customerId} - Name: {result.createdBy}
							</div>
							<div className='card-body testeando'>
								<h5 className='card-title'>Type id:{result.customerTypeId}</h5>
								<div>
									<Link to={'/customers/' + result.customerId} className='btn btn-primary'>
										Edit
									</Link>
								</div>
							</div>
						</div>
						<div className='card-footer text-body-secondary'></div>
					</div>
				);
			})}
		</div>
	);
}
