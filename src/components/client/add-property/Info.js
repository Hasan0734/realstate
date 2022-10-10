import { useDispatch, useSelector } from 'react-redux';
import { setBasic } from '../../../../store/property/actions';

function Info({isValid}){
    const dispatch = useDispatch();
    const { property }= useSelector(state=>state); 
    const { basic } = property;
    const {propertyCategory, propertyType, bedrooms, bathrooms, bikeParking, carParking, carpetArea, superArea, }  = basic;
    
    
 
    return(
        <div className="bg-light rounded-3 p-4 p-md-5 mb-3">
            <h2 className="h4 mb-4"><i className="fi-info-circle text-primary fs-4 mt-n1 me-2 pe-1" />Basic info</h2>
            <div className="row">
                <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="category">Category<span className="text-danger">*</span></label>
                <select
                    name="propertyCategory"
                    onChange={e=>dispatch(setBasic(e))} 
                    value={basic.propertyCategory? basic.propertyCategory: ''}
                    className="form-select form-select-lg" 
                    id="category"
                >
                    <option selected>Choose</option>
                    <option value="Rent">For rent</option>
                </select>
                {!propertyCategory && isValid && <div className='text-danger'>Category  required</div>}

                </div>
                <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="propertyType">Property type<span className="text-danger">*</span></label>
                <select
                    name="propertyType"
                    onChange={e=>dispatch(setBasic(e))} 
                    value={basic.propertyType? basic.propertyType: ''}
                    className="form-select form-select-lg" 
                    id="propertyType"
                >
                    <option selected>Choose</option>
                    <option value="Apartment">Apartment</option>
                    <option value="Villa">Villa</option>
                </select>
                {!propertyType && isValid && <div className='text-danger'>Category type required</div>}
                </div>
                <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="bedrooms">Bedrooms<span className="text-danger">*</span></label>
                <select
                    name="bedrooms"
                    onChange={e=>dispatch(setBasic(e))}
                    value={basic.bedrooms? basic.bedrooms: ''}  
                    className="form-select form-select-lg" 
                    id="bedrooms"
                >
                    <option selected>Choose</option>
                    <option value="1">1 BHK</option>
                    <option value="2">2 BHK</option>
                    <option value="3">3 BHK</option>
                    <option value="4">3+ BHK</option>
                </select>
                {!bedrooms && isValid && <div className='text-danger'>Bedrooms required</div>}
                </div>
                <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="bathrooms">Bathrooms<span className="text-danger">*</span></label>
                <select
                    name="bathrooms"
                    onChange={e=>dispatch(setBasic(e))} 
                    value={basic.bathrooms? basic.bathrooms: ''}   
                    className="form-select form-select-lg" 
                    id="bathrooms" 
                >
                    <option selected>Choose</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">3+</option>
                </select>
                {!bathrooms &&  isValid && <div className='text-danger'>Bathrooms required</div>}
                </div>
                <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="bikeParking">Bike parking<span className="text-danger">*</span></label>
                <select
                    name="bikeParking"
                    onChange={e=>dispatch(setBasic(e))}
                    value={basic.bikeParking? basic.bikeParking: ''}   
                    className="form-select form-select-lg" 
                    id="bikeParking" 
                >
                    <option selected>Choose</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">3+</option>
                </select>
                {!bikeParking &&  isValid && <div className='text-danger'>Bike parking required</div>}
                </div>
                <div className="col-sm-6 mb-4">
                <label className="form-label" htmlFor="carParking">Car parking<span className="text-danger">*</span></label>
                <select
                    name="carParking"
                    onChange={e=>dispatch(setBasic(e))}
                    value={basic.carParking? basic.carParking: ''}      
                    className="form-select form-select-lg" 
                    id="carParking"
                >
                    <option>Choose</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">3+</option>
                </select>
                {!carParking &&  isValid && <div className='text-danger'>Car Parking required</div>}
                </div>
                <div className="col-lg-6 mb-4">
                <label className="form-label" htmlFor="carpetArea">Carpet area (sq-ft only)<span className="text-danger">*</span></label>
                <input
                    name="carpetArea"
                    onChange={e=>dispatch(setBasic(e))}
                    value={basic.carpetArea? basic.carpetArea: ''}      
                    className="form-control form-control-lg" 
                    type="number" 
                    id="carpetArea" 
                    placeholder="Enter carpet are in sq-ft only"
                />
                {carpetArea === '' &&  isValid && <div className='text-danger'>Carpet area required</div>}
                </div>
                <div className="col-lg-6 mb-4">
                <label className="form-label" htmlFor="superArea">super area (sq-ft only)<span className="text-danger">*</span></label>
                <input
                    name="superArea"
                    onChange={e=>dispatch(setBasic(e))}
                    value={basic.superArea? basic.superArea: ''}    
                    className="form-control form-control-lg" 
                    type="number" id="superArea" 
                    placeholder="Enter super are in sq-ft only"
                />
                  {superArea === '' &&  isValid && <div className='text-danger'>Super area required</div>}
                </div>
            </div>
            <div className="form-check mb-6">
            </div>
        </div>
    )
}
export default Info;