import{ Link } from 'react-router-dom'

export default function CustomersTypes ({types}) {
    return (
        <>
        <div className='card text-center'>
            {types.map((result) => {
                return (
                    <div key={result.id} >
                        <div  className='card-header'>
                            id: {result.customerId} - Name: {result.createdBy}
                        </div>
                        <div  className='card-body testeando'>
                            <h5 className='card-title'>Type id:{result.customerTypeId}</h5>
                            <div>
                                <Link
                                    to={'/customers/' + result.customerId}
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
    )
}