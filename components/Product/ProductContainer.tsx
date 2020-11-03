import { ProductView } from "../../interfaces/productView";
import { Container, Col, Row } from "reactstrap";
import LazyLoadingImage from "../Common/LazyLoadingImage";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CounterSelector from "../Common/CounterSelector";
import AddToBasket from "../Common/AddToBasketButton";
import NumberFormat from 'react-number-format';
import ColorSelector from "../Common/ColorSelector";
import { TitleID } from "../../interfaces/titleID";
import DropDown from "../Common/DropDown";
import { IoMdShare, IoMdHeartEmpty } from "react-icons/io";
import ProductHeader from "./ProductHeader";
import SiteMap, { CreateSiteMap } from "../Common/SiteMap";
import { SiteMapItemView } from "../../interfaces/siteMapItemView";

interface Props {
    product: ProductView
}

export default function ProductContainer(props: Props) {
    const [counter, setCounter] = useState(1);
    const [selectedImage, setSelectedImage] = useState(props.product.imagePaths[0]);

    const [siteMap, setSiteMap] = useState<SiteMapItemView[]>([]);

    useEffect(() => {
        const _siteMap = CreateSiteMap(
            props.product.categoryID,
            props.product.category,
            props.product.parentID,
            props.product.parent,
            props.product.categoryKindID,
            props.product.categoryKind,
            props.product.id,
            props.product.fullTitle);

        setSiteMap(_siteMap);
    }, []);

    return <Container>
        <Row>
            <Col xs={12} className="pr-0 pt-2 pb-2 pl-0">
                <SiteMap siteMapItemView={siteMap} />
            </Col>
        </Row>
        <Row>
            <Col xs={12} className="product-box p-4">
                <Row>
                    <Col xs={12}>
                        <Row>
                            <Col xs={12} className="d-block d-sm-none">
                                <ProductHeader product={props.product} />
                            </Col>
                            <Col xs={12} sm={4} className="pr-5 pl-5">
                                <Row className="mb-4">
                                    <Col xs={12} className="d-flex justify-content-center">
                                        <LazyLoadingImage alt={props.product.fullTitle} className="product-main-image" src={selectedImage} />
                                    </Col>
                                </Row>
                                <Row className="d-flex justify-content-center">
                                    {props.product.imagePaths.map((image, index) =>
                                        <Col xs="auto" className={(index === 0 ? "pr-0" : "pr-1 pr-sm-3") + (props.product.imagePaths.length - 1 === index ? " pl-0" : " pl-1 pl-sm-3")}>
                                            <img alt={props.product.fullTitle} className="product-image" src={image} onClick={() => setSelectedImage(image)} />
                                        </Col>
                                    )}
                                </Row>
                            </Col>
                            <Col xs={12} className="d-block d-sm-none mb-5 mt-3">
                                <div className="split-bottom" />
                            </Col>
                            <Col xs={12} className="d-block d-sm-none">
                                {props.product.selectableProperties.map((selectableProperty) =>
                                    <Row className="mb-2">
                                        <Col xs={2} className="product-selectable-property-title">
                                            {selectableProperty.title}:
                                                    </Col>
                                        <Col xs={10}>
                                            {selectableProperty.type === 1 ?
                                                <ColorSelector colors={selectableProperty.values.map(v => { return { ID: v.id, title: v.value } as TitleID })} />
                                                :
                                                <DropDown items={selectableProperty.values.map(v => { return { ID: v.id, title: v.value } as TitleID })} />
                                            }
                                        </Col>
                                    </Row>
                                )}
                            </Col>
                            <Col xs={8} className="split-right pr-5 pl-5 d-none d-sm-flex flex-column">
                                <ProductHeader product={props.product} />
                                <Row className="flex-fill">
                                    <Col xs={6} className="pl-5">
                                        <Row className="mb-2">
                                            <Col xs={12} className="product-property-title">
                                                ویژگی‌های محصول
                                            </Col>
                                        </Row>
                                        <Row className="text-right">
                                            {props.product.mainProperties.map((property) =>
                                                (property.type === 1) ?
                                                    <Col xs={6}>
                                                        <div className="float-right">
                                                            <span className="fa fa-circle product-property-circle"></span>
                                                            <span className="product-property-item">{" " + property.title}:</span>
                                                        </div>
                                                        {property.values.map((value) =>
                                                            <div className="mr-2 float-right color-box" style={{ backgroundColor: "#" + value.value }}></div>
                                                        )}
                                                    </Col>
                                                    :
                                                    <Col xs={6}>
                                                        <span className="fa fa-circle product-property-circle"></span>
                                                        <span className="product-property-item">{" " + property.title}:{" " + property.values.map((value) => value.value).join(" / ")}</span>
                                                    </Col>
                                            )}
                                        </Row>
                                    </Col>
                                    <Col xs={6} className="split-right pr-5">
                                        {props.product.selectableProperties.map((selectableProperty) =>
                                            <Row className="mb-2">
                                                <Col xs={2} className="product-selectable-property-title">
                                                    {selectableProperty.title}:
                                                    </Col>
                                                <Col xs={10}>
                                                    {selectableProperty.type === 1 ?
                                                        <ColorSelector colors={selectableProperty.values.map(v => { return { ID: v.id, title: v.value } as TitleID })} />
                                                        :
                                                        <DropDown items={selectableProperty.values.map(v => { return { ID: v.id, title: v.value } as TitleID })} />
                                                    }
                                                </Col>
                                            </Row>
                                        )}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="mb-4">
                    <Col xs={12}>
                        <div className="split-bottom p-3"></div>
                    </Col>
                </Row>
                <Row>
                    <Col xs="auto" className="pr-5 pl-4 product-links d-none d-sm-flex align-items-center">
                        <Link href="/share">
                            <a>
                                <IoMdShare fontSize="24px" />
                            </a>
                        </Link>
                    </Col>
                    <Col xs="auto" className="pr-4 product-links d-none d-sm-flex align-items-center split-right">
                        <Link href="/like">
                            <a>
                                <IoMdHeartEmpty fontSize="24px" />
                            </a>
                        </Link>
                    </Col>
                    {props.product.price === 0 ?
                        <Col className="product-unavailable text-left mr-auto">
                            ناموجود
                        </Col>
                        :
                        <React.Fragment>
                            <Col xs="auto" className="mr-0 mr-sm-auto">
                                <Row className={"d-flex align-items-center" + (props.product.price !== props.product.orginalPrice ? "" : " h-100")}>
                                    <Col xs={12} className="product-price">
                                        <NumberFormat value={props.product.price} displayType={'text'} thousandSeparator={true} /><span className="pr-1 symbol">تومان</span>
                                    </Col>
                                </Row>
                                {props.product.price !== props.product.orginalPrice ?
                                    <Row>
                                        <Col xs={12} className="product-price-discount">
                                            <NumberFormat value={props.product.orginalPrice} displayType={'text'} thousandSeparator={true} /><span className="pr-1 symbol">تومان</span>
                                        </Col>
                                    </Row> : <React.Fragment></React.Fragment>}
                            </Col>
                            <Col xs="auto" className="pl-0 pr-4 d-flex align-items-center counter-selector-title mr-auto mr-sm-0">
                                تعداد
                            </Col>
                            <Col xs="auto">
                                <CounterSelector counter={counter} setCounter={setCounter} />
                            </Col>
                            <Col xs="auto pr-0 d-none d-sm-block">
                                <AddToBasket type="normal" productID={props.product.id} count={counter} setCount={setCounter} selectablePropertyValuesIDs={[]} />
                            </Col>
                            <Col xs={12} className="product-add-to-basket-mobile-container p-0 d-block d-sm-none">
                                <AddToBasket type="normal-mobile" productID={props.product.id} count={counter} setCount={setCounter} selectablePropertyValuesIDs={[]} />
                            </Col>
                        </React.Fragment>
                    }
                </Row>
            </Col>
        </Row>
    </Container>
}