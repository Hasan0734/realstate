import React from 'react';
import FAQBreadcrumb from '../src/components/client/FAQ/FAQBreadcrumb';
import FAQContactUs from '../src/components/client/FAQ/FAQContactUs';
import Content from '../src/components/client/FAQ/FAQContents/Content';
import FAQHeader from '../src/components/client/FAQ/FAQHeader';
import Layout from '../src/components/client/layout';

const FAQs = () => {
    return (
        <Layout>
            <FAQBreadcrumb/>
            <FAQHeader/>
            <Content/>
            <FAQContactUs/>
        </Layout>
    );
};

export default FAQs;