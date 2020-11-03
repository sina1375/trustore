import { Container, Col, Row } from "reactstrap";
import { useTransition, animated } from "react-spring";
import React, { useMemo, useState } from "react";
import { CategoryView } from "../../interfaces/categoryView";
import { getDataFetcher } from "../../helper/contans";
import Spiner from "../Common/Spiner";
import MenuMobileItem from "./MenuMobileItem";

interface Props {
    className?: string,
    isOpen: boolean,
    setOpen: (isOpen: boolean) => void,
}

export default function MenuMobile(menuProps: Props) {
    const [categoryViews, setCategoryViews] = useState<CategoryView[]>();
    const [selectedCategory, setSelectedCategory] = useState(0);
    const [loading, setLoading] = useState(true);

    const transitions = useTransition(menuProps.isOpen, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    useMemo(() => {
        getDataFetcher('/category/GetAllCategoriesWithChilds')
            .then(res => res.json())
            .then(res => {
                const categories: CategoryView[] = res;
                return categories;
            })
            .then(res => {
                setCategoryViews(res);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [])

    return <React.Fragment>
        {
            transitions.map(({ item, props }) =>
                item &&
                <animated.div style={props} className={"container-fluid menu-container" + (menuProps.className && " " + menuProps.className)}>
                    <Row onMouseLeave={() => menuProps.setOpen(false)}>
                        <Col xs={12}>
                            <Container className="menu-main-container">
                                {loading
                                    ?
                                    <Spiner></Spiner>
                                    :
                                    <Row>
                                        <Col xs={12} className="menu-category p-0">
                                            {categoryViews &&
                                                categoryViews.map(categoryView =>
                                                    <MenuMobileItem category={categoryView} onSelect={setSelectedCategory} isOpen={selectedCategory === categoryView.id} />
                                                )
                                            }
                                        </Col>
                                    </Row>
                                }
                            </Container>
                        </Col>
                    </Row>
                </animated.div>
            )
        }
    </React.Fragment>
}