import Layout from '../components/Layout/Layout'
import { Row, Col, Container } from 'reactstrap'
import StaticMenu from '../components/Index/StaticMenu'
import { GetServerSideProps } from 'next'
import { HomeView } from '../interfaces/homeView'
import React from 'react'
import Services from '../components/Common/Services'
import ProductListViewer from '../components/Common/ProductListViewer'
import Link from 'next/link'
import getApiPath from '../helper/contans'

interface Props {
  homeView?: HomeView,
  errors?: string,
}

export default function IndexPage(props: Props) {
  if (props.errors) {
    return (
      <Layout title="خطا">
        <Container fluid={true}>
          <p>
            <span style={{ color: 'red' }}>خطا:</span> {props.errors}
          </p>
        </Container>
      </Layout>
    )
  }
  return <Layout title="خانه">
    {props.homeView &&
      <Container fluid={true}>
        <Row className="mb-5 mt-5">
          <Col xs={12}>
            <Container>
              <Row>
                <Col xs={4}>
                  <StaticMenu categories={props.homeView.categories} />
                </Col>
                <Col xs={8} className="d-flex flex-column">
                  <Row className="flex-fill mb-2">
                    <Col xs={12} className="slide-image-container pl-0">
                      <Link href={"/shop?group=" + props.homeView.firstSlideGroupID} as={"/shop?group=" + props.homeView.firstSlideGroupID}>
                        <a>
                          <img className="slide-image" src={props.homeView.firstSlidePath} />
                        </a>
                      </Link>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={6} className="slide-image-container pl-1">
                      <Link href={"/shop?group=" + props.homeView.secondSlideGroupID} as={"/shop?group=" + props.homeView.secondSlideGroupID}>
                        <a>
                          <img className="slide-image" src={props.homeView.secondSlidePath} />
                        </a>
                      </Link>
                    </Col>
                    <Col xs={6} className="slide-image-container pl-0 pr-1">
                      <Link href={"/shop?group=" + props.homeView.thirdSlideGroupID} as={"/shop?group=" + props.homeView.thirdSlideGroupID}>
                        <a>
                          <img className="slide-image" src={props.homeView.thirdSlidePath} />
                        </a>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
        <Row className="mb-5">
          <Col xs={12}>
            <Services />
          </Col>
        </Row>
        <Row className="home-dark-row pt-4 pb-4">
          <Col xs={12}>
            <ProductListViewer title="جدیدترین محصولات" products={props.homeView.newstProducts} />
          </Col>
        </Row>
        <Row className="pt-4 pb-4">
          <Col xs={12}>
            <ProductListViewer title="پربازدیدترین محصولات" products={props.homeView.mostVisitsProducts} />
          </Col>
        </Row>
      </Container>
    }
  </Layout>
}


export const getServerSideProps: GetServerSideProps = async ({ }) => {
  try {
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    const res = await fetch(getApiPath() + '/home/GetHomeDetails');
    const homeDetail: HomeView = await res.json();

    return { props: { homeView: homeDetail } }
  } catch (err) {
    return { props: { errors: err.message } }
  }
}