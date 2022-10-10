import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '../../../../store/property/actions';

function Location({isValid}){

    const dispatch = useDispatch();
    const { property }= useSelector(state=>state); 
    const { location } = property;
   
    const { areaName, city, houseNumber, pinCode, societyName, state } = location;
    return(
        <div className="bg-light rounded-3 p-4 p-md-5 mb-3">
            <h2 className="h4 mb-4"><i className="fi-info-circle text-primary fs-4 mt-n1 me-2 pe-1" />Location</h2>
            <div className="row">
                <div className="col-sm-6 mb-4">
                    <label className="form-label" htmlFor="houseNumber">House or Flat number<span className="text-danger">*</span></label>
                    <input
                        name="houseNumber"
                        onChange={ e=>dispatch(setLocation(e)) } 
                        value={ location.houseNumber? location.houseNumber: '' } 
                        className="form-control form-control-lg" 
                        type="text" id="houseNumber" 
                        placeholder="Enter your House/Flat number" 
                    />
                      {!houseNumber &&  isValid && <div className='text-danger'>House number required</div>}
                </div>
                <div className="col-sm-6 mb-4">
                    <label className="form-label" htmlFor="societyName">Society or Project name<span className="text-danger">*</span></label>
                    <input
                        name="societyName"
                        onChange={ e=>dispatch(setLocation(e)) } 
                        value={ location.societyName? location.societyName: '' }  
                        className="form-control form-control-lg" 
                        type="text" id="societyName" 
                        placeholder="Enter Society or Project name"
                    />
                      {!societyName &&  isValid && <div className='text-danger'>Society name required</div>}
                </div>
                <div className="col-sm-6 mb-4">
                    <label className="form-label" htmlFor="areaName">Area name<span className="text-danger">*</span></label>
                    <input
                        name="areaName"
                        onChange={ e=>dispatch(setLocation(e)) } 
                        value={ location.areaName? location.areaName: '' }   
                        className="form-control form-control-lg" 
                        type="text" id="areaName" 
                        placeholder="Enter area name"
                    />
                      {!areaName &&  isValid && <div className='text-danger'>Area Number required</div>}
                </div>
                <div className="col-sm-6 mb-4">
                    <label className="form-label" htmlFor="city">City<span className="text-danger">*</span></label>
                    <input
                        name="city"
                        onChange={ e=>dispatch(setLocation(e)) } 
                        value={ location.city? location.city: '' }   
                        className="form-control form-control-lg" 
                        type="text" id="city" 
                        placeholder="Enter city name"
                    />
                      {!city &&  isValid && <div className='text-danger'>City Name required</div>}
                </div>
                <div className="col-sm-6 mb-4">
                    <label className="form-label" htmlFor="state">State<span className="text-danger">*</span></label>
                    <input
                        name="state"
                        onChange={e=>dispatch(setLocation(e))} 
                        value={ location.state? location.state: '' }   
                        className="form-control form-control-lg" 
                        type="text" 
                        id="state" 
                        placeholder="Enter state name" 
                    />
                      {!state &&  isValid && <div className='text-danger'>State is required</div>}
                </div>
                <div className="col-sm-6 mb-4">
                    <label className="form-label" htmlFor="pinCode">PIN code<span className="text-danger">*</span></label>
                    <input
                        name="pinCode"
                        onChange={e=>dispatch(setLocation(e))} 
                        value={ location.pinCode? location.pinCode: '' }   
                        className="form-control form-control-lg" 
                        type="number" 
                        id="pinCode" 
                        placeholder="Enter pin code number" 
                    />
                      {!pinCode &&  isValid && <div className='text-danger'>Pin code is required</div>}
                </div>
            </div>
      </div>
    )
}
export default Location;