import React, { useState } from 'react';
import PremiumFilters from './PremiumFilters/PremiumFilters';
import PropertiesNavTab from './PropertiesNavTab';
import PropertyCategories from './PropertyCategories/PropertyCategories';
import PropertySearch from './PropertySearch';

const FilterSidebar = () => {
  const [filterTab, setFilterTab] = useState('filter')
    return (
        <>
             <aside
            className="col-lg-4 col-xl-3 border-top-lg border-end-lg shadow-sm px-3 px-xl-4 px-xxl-5 pt-lg-2"
            style={{ marginLeft: "160px" }}
          >
            <div className="sticky-top">
              <div
                className="offcanvas offcanvas-start offcanvas-collapse"
                id="filters-sidebar"
              >
                <div className="offcanvas-header d-flex d-lg-none align-items-center">
                  <h2 className="h5 mb-0">Filters</h2>
                  <button
                    className="btn-close"
                    type="button"
                    data-bs-dismiss="offcanvas"
                  />
                </div>
                {/* Search form*/}
                <PropertySearch />
                {/* Nav tabs*/}
                <PropertiesNavTab setFilterTab={setFilterTab} />
                <div className="offcanvas-body py-lg-4">
                  {/* Tabs content*/}
                  <div className="tab-content">
                    {/* Categories*/}
                    <PropertyCategories filterTab={filterTab} />
                    {/* Filters*/}
                    <PremiumFilters filterTab={filterTab} />
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </>
    );
};

export default FilterSidebar;