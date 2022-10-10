import { combineReducers } from '@reduxjs/toolkit';
import { adminSlice } from './admins/slice';
import { userSlice } from './users/slice';
import { propertySlice } from './property/slice';
import { categorySlice } from './catrgories/slice';
import { tagSlice } from './tags/slice';
import { reviewSlice, reviewsSlice } from './reviews/slice';
import { blogSlice } from './blog/slice';
import { propertyCategorySlice } from './propertyCategory/slice';
import { propertySearchSlice } from './propertySearch/slice';
import { singlePropertySlice } from './singleProperty/slice';
import { blogsSlice } from './blogs/slice';
import { propertiesSlice } from './properties/slice';
import { propertySortSlice } from './propertySort/slice';
import { premiumSelectedSlice } from './premiumSelect/slice';
import { filterDataSlice } from './propertyFilterData/slice';
import { amenitiesDataSlice } from './amenitiesData/slice';

export const rootReducer = combineReducers({
    users: userSlice.reducer,
    admins: adminSlice.reducer,
    property: propertySlice.reducer,
    categories: categorySlice.reducer,
    tags: tagSlice.reducer,
    blog: blogSlice.reducer,
    selectedCategory: propertyCategorySlice.reducer,
    search: propertySearchSlice.reducer,
    singleProperty: singlePropertySlice.reducer,
    blogs: blogsSlice.reducer,
    properties: propertiesSlice.reducer,
    reviews: reviewsSlice.reducer,
    propertySort: propertySortSlice.reducer,
    premiumSelected: premiumSelectedSlice.reducer,
    filterData: filterDataSlice.reducer,
    amenitiesData: amenitiesDataSlice.reducer
})