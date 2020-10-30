import { Container, Col, Row } from "reactstrap";
import { useTransition, animated } from "react-spring";
import React, { useEffect, useState } from "react";
import { CategoryView } from "../../interfaces/categoryView";
import ProductsDigital from "../../icons/products-digital";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import { getDataFetcher } from "../../helper/contans";

interface Props {
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void,
}

export default function Menu(menuProps: Props) {

    const [categoryViews, setCategoryViews] = useState<CategoryView[]>();
    const [selectedCategory, setSelectedCategory] = useState<CategoryView>();

    const transitions = useTransition(menuProps.isOpen, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    useEffect(() => {
        async function getData() {
            const res = await getDataFetcher('/category/GetAllCategoriesWithChilds');
            const categories: CategoryView[] = await res.json();
            return categories;
        }

        getData().then(res => {
            setCategoryViews(res);
            if (res.length > 0) {
                setSelectedCategory(res[0]);
            }
        });
    }, [])

    return <React.Fragment>
        {
            transitions.map(({ item, props }) =>
                item &&
                <animated.div style={props} className="container-fluid menu-container">
                    <Row onMouseLeave={() => menuProps.setOpen(false)}>
                        <Col xs={12}>
                            <Container className="menu-main-container">
                                <Row>
                                    <Col xs={3} className="menu-category">
                                        {categoryViews &&
                                            categoryViews.map(categoryView =>
                                                <Link href={"/shop?category=" + categoryView.id} as={"/shop?category=" + categoryView.id}>
                                                    <a>
                                                        <Row onMouseEnter={() => setSelectedCategory(categoryView)} className={"menu-category-item split-bottom" + (selectedCategory && selectedCategory.id === categoryView.id ? " selected" : "")}>
                                                            <Col xs={12}>
                                                                <Row>
                                                                    <Col xs="auto" className="d-flex align-items-center">
                                                                        <ProductsDigital />
                                                                    </Col>
                                                                    <Col className="p-3">
                                                                        {categoryView.faName}
                                                                    </Col>
                                                                    <Col xs="auto" className="d-flex align-items-center">
                                                                        <FaChevronLeft fontSize="10px" color="#a2a2a2" />
                                                                    </Col>
                                                                </Row>
                                                            </Col>
                                                        </Row>
                                                    </a>
                                                </Link>
                                            )
                                        }
                                    </Col>
                                    <Col xs={9} className="split-right">
                                        <Row>
                                            {selectedCategory &&
                                                selectedCategory.categoryKinds.map(categoryKind =>
                                                    <Col xs={3}>
                                                        <Link href={"/shop?parent=" + categoryKind.id} as={"/shop?parent=" + categoryKind.id}>
                                                            <a>
                                                                <Row className="menu-category-kind-header split-bottom mt-4 mr-4 ml-4">
                                                                    <Col>
                                                                        {categoryKind.name}
                                                                    </Col>
                                                                    <Col xs="auto" className="p-0 d-flex align-items-center">
                                                                        <FaChevronLeft fontSize="10px" color="#a2a2a2" />
                                                                    </Col>
                                                                </Row>
                                                            </a>
                                                        </Link>
                                                        {categoryKind.childs &&
                                                            categoryKind.childs.map(child =>
                                                                <Link href={"/shop?categoryKind=" + child.id + "&parent=" + categoryKind.id} as={"/shop?categoryKind=" + child.id + "&parent=" + categoryKind.id}>
                                                                    <a>
                                                                        <Row className="menu-category-kind-child mt-2 mr-4 ml-4">
                                                                            <Col xs={12}>
                                                                                {child.name}
                                                                            </Col>
                                                                        </Row>
                                                                    </a>
                                                                </Link>
                                                            )
                                                        }
                                                    </Col>
                                                )
                                            }
                                        </Row>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </animated.div>
            )
        }
    </React.Fragment>
}
