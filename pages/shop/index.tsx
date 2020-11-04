import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { UrlObject } from "url";
import Button from "../../components/Common/Button";
import Popup from "../../components/Common/Popup";
import SiteMap, { CreateSiteMap } from "../../components/Common/SiteMap";
import Layout from "../../components/Layout/Layout";
import { Paging } from "../../components/Shop/Paging";
import Product from "../../components/Shop/Product";
import ProductFilter from "../../components/Shop/ProductFilter";
import { postDataFetcher } from "../../helper/contans";
import { ProductsFromBody } from "../../interfaces/productsFromBody";
import { ShopQuery } from "../../interfaces/shopQuery";
import { ShopView } from "../../interfaces/shopView";
import { SiteMapItemView } from "../../interfaces/siteMapItemView";
import { FaFilter } from "react-icons/fa";

interface Props {
    shop?: ShopView,
    errors?: string,
}

function getQuery(query: ParsedUrlQuery) {
    const { category, group, categoryKind, parent, pageNo, brands, productProperies } = query;

    const res: ShopQuery = {
        pageNo: pageNo === undefined ? 1 : Number(pageNo),
        parent: parent === undefined ? undefined : Number(parent),
        category: category === undefined ? undefined : Number(category),
        group: group === undefined ? undefined : Number(group),
        brands: getParameterIDs(brands),
        categoryKinds: getParameterIDs(categoryKind),
        productProperies: getParameterIDs(productProperies),
    }

    return res;
}

function getParameterIDs(parameter: string | string[]) {
    if (parameter === undefined) {
        return [];
    }
    else {
        return typeof (parameter) === "string" ? [Number(parameter)] : parameter.map(i => Number(i));
    }
}

export default function Shop(props: Props) {
    const [popupFilterOpen, setPopupFilterOpen] = useState(false);
    const [siteMap, setSiteMap] = useState<SiteMapItemView[]>([]);

    const router = useRouter();
    var query = getQuery(router.query);

    useEffect(() => {
        if (props.shop) {
            const _siteMap = CreateSiteMap(props.shop.categoryKind.id, props.shop.categoryKind.name);
            setSiteMap(_siteMap);
        }
    }, [props.shop]);

    function setCategoryKind(categoryKindID: number) {
        if (query.categoryKinds.includes(categoryKindID)) {
            query.categoryKinds = query.categoryKinds.filter(i => i !== categoryKindID);
        }
        else {
            query.categoryKinds = [...query.categoryKinds, categoryKindID];
        }

        pushRouter();
    }

    function setBrand(brandID: number) {
        if (query.brands.includes(brandID)) {
            query.brands = query.brands.filter(i => i !== brandID);
        }
        else {
            query.brands = [...query.brands, brandID];
        }

        pushRouter();
    }

    function setProductProperies(productProperyID: number) {
        if (query.productProperies.includes(productProperyID)) {
            query.productProperies = query.productProperies.filter(i => i !== productProperyID);
        }
        else {
            query.productProperies = [...query.productProperies, productProperyID];
        }

        pushRouter();
    }

    function pushRouter() {
        router.push(getUrl(1));
    }

    function getUrl(page: number) {
        const querystring = require('query-string');
        const res: UrlObject = { pathname: '/shop' }

        query.pageNo = page;
        res.query = querystring.stringify(query, { skipNull: true });

        return res;
    }

    return <Layout title="فروشگاه">
        {props.shop?.products &&
            <Container fluid={true} className="shop-container pt-2">
                <Row>
                    <Col xs={12}>
                        <Container>
                            <Row>
                                <Col xs={3} className="d-none d-sm-block">
                                    <ProductFilter
                                        categoryKindView={props.shop.categoryKind}
                                        setCategoryKind={setCategoryKind}
                                        selectedCategoryKinds={query.categoryKinds}
                                        brands={props.shop.brands}
                                        setBrand={setBrand}
                                        selectedBrands={query.brands}
                                        productProperies={props.shop.productProperties}
                                        selectedProductProperies={query.productProperies}
                                        setProductProperies={setProductProperies}
                                    />
                                </Col>
                                <Col xs={12} sm={9}>
                                    <Row className="mb-2">
                                        <SiteMap siteMapItemView={siteMap} />
                                    </Row>
                                    <Row>
                                        {props.shop.products.map(product =>
                                            <Col xs={12} s={6} md={6} lg={4} xl={3} className="mb-4 pl-1 pr-1">
                                                <Product product={product} />
                                            </Col>
                                        )}
                                    </Row>
                                </Col>
                            </Row>
                            <Row className="mb-4">
                                <Col xs={3} className="d-none d-sm-block">
                                </Col>
                                <Col xs={12} sm={9} className="p-0">
                                    <Paging pageIndex={query.pageNo} pagesCount={props.shop.pagesCount} getUrl={getUrl} />
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                <Row className="product-filter-mobile-button d-block d-sm-none">
                    <Button type="secondary2" onClick={() => setPopupFilterOpen(true)} className="rounded-0">
                        <span className="pl-1"><FaFilter /></span>
                        <span>فیلتر</span>
                    </Button>
                </Row>
                <Popup isOpen={popupFilterOpen} setOpen={setPopupFilterOpen} className="container p-0">
                    <ProductFilter
                        categoryKindView={props.shop.categoryKind}
                        setCategoryKind={setCategoryKind}
                        selectedCategoryKinds={query.categoryKinds}
                        brands={props.shop.brands}
                        setBrand={setBrand}
                        selectedBrands={query.brands}
                        productProperies={props.shop.productProperties}
                        selectedProductProperies={query.productProperies}
                        setProductProperies={setProductProperies}
                    />
                </Popup>
            </Container>
        }
    </Layout>
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    try {
        const queryRes = getQuery(query);

        const productsFromBody: ProductsFromBody = {
            brands: queryRes.brands,
            categoryKinds: queryRes.categoryKinds,
            pageNo: queryRes.pageNo,
            parent: queryRes.parent,
            categoryID: queryRes.category,
            groupID: queryRes.group,
            propertyItemValues: queryRes.productProperies,
            endPrice: queryRes.endPrice,
            startPrice: queryRes.startPrice,
        }

        const resProduct = await postDataFetcher('/shop/GetProducts', productsFromBody);
        const shop: ShopView = await resProduct.json();

        return { props: { shop: shop } }
    } catch (err) {
        return { props: { errors: err.message } }
    }
}
