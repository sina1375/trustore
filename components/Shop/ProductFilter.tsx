import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import { CategoryKindView } from "../../interfaces/categoryKindView";
import ProductFilterCollapse from "./ProductFilterCollapse";
import { FaAngleLeft } from "react-icons/fa";
import { BrandView } from "../../interfaces/brandView";
import { ProductProperyView } from "../../interfaces/productPropertyView";

interface Props {
    categoryKindView?: CategoryKindView,
    setCategoryKind: (id: number) => void,
    selectedCategoryKinds: number[],

    brands: BrandView[],
    setBrand: (id: number) => void,
    selectedBrands: number[],

    productProperies: ProductProperyView[],
    setProductProperies: (id: number) => void,
    selectedProductProperies: number[],
}

export default function ProductFilter(props: Props) {
    const [brands, setBrands] = useState<BrandView[]>();

    function brandSearch(value: string) {
        setBrands(props.brands.filter(i => i.faName.includes(value)));
    }

    useEffect(() => {
        setBrands(props.brands);
    }, [props.brands]);

    return <Container className="product-filter-container p-3">
        <Row>
            <Col xs={12}>
                {props.categoryKindView &&
                    <Row className="m-0 mb-4">
                        <ProductFilterCollapse defaultOpen={true} title="در این دسته بندی">
                            <Row className="mb-2">
                                <Col xs="auto" className="d-flex align-items-center">
                                    <FaAngleLeft fontSize="18px" color="#999999" />
                                </Col>
                                <Col className="product-filter-category-kind-title pr-0">
                                    {props.categoryKindView.name}
                                </Col>
                            </Row>
                            {props.categoryKindView.childs.map(categoryKind =>
                                <Row className="mb-2">
                                    <Col className={"product-filter-category-kind-title mr-5" + (props.selectedCategoryKinds.includes(categoryKind.id) ? " selected" : "")} onClick={() => props.setCategoryKind(categoryKind.id)}>
                                        {categoryKind.name}
                                    </Col>
                                </Row>
                            )}
                        </ProductFilterCollapse>
                    </Row>
                }
                {/* <Row className="m-0 mb-4">
                    <ProductFilterCollapse defaultOpen={true} title="قیمت">
                        <Range min={0} max={100} defaultValue={[0, 100]} />
                    </ProductFilterCollapse>
                </Row> */}
                <Row className="m-0 mb-4">
                    <ProductFilterCollapse defaultOpen={true} title="برند محصول">
                        <Row className="mb-2">
                            <input className="text-center dark" placeholder="جستجو در برند" onChange={e => brandSearch(e.target.value)} />
                        </Row>
                        <Row className="product-filter-content scroll">
                            <Col xs={12}>
                                {brands && brands.map(brand =>
                                    <Row>
                                        <Col xs="auto">
                                            <label className="d-flex align-items-center m-0">
                                                <input type="checkbox" defaultChecked={props.selectedBrands.includes(brand.id)} onChange={() => props.setBrand(brand.id)} />
                                                <span className="pr-2">{brand.faName}</span>
                                            </label>
                                        </Col>
                                    </Row>
                                )}
                            </Col>
                        </Row>
                    </ProductFilterCollapse>
                </Row>
                {
                    props.productProperies.map(property =>
                        <Row className="m-0 mb-4">
                            <ProductFilterCollapse defaultOpen={false} title={property.title}>
                                <Row className="product-filter-content scroll">
                                    <Col xs={12}>
                                        {property.values.map(value =>
                                            <Row>
                                                <Col xs="auto">
                                                    <label className="d-flex align-items-center m-0">
                                                        <input type="checkbox" defaultChecked={props.selectedProductProperies.includes(value.id)} onChange={() => props.setProductProperies(value.id)} />
                                                        <span className="pr-2">{value.value}</span>
                                                    </label>
                                                </Col>
                                            </Row>
                                        )}
                                    </Col>
                                </Row>
                            </ProductFilterCollapse>
                        </Row>
                    )
                }
            </Col>
        </Row>
    </Container>
}