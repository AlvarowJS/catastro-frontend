import React, { Fragment, useState } from 'react'
import { Col, Label, Row, Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import { User, Lock, Bookmark, Bell, Link } from 'react-feather'

import FormFichaIndividualPrimer from './FormFichaIndividualPrimer'
import FormFichaIndividualSecun from './FormFichaIndividualSecun'
import FormFichaIndividualTerce from './FormFichaIndividualTerce'

const FormFichaIndividual = () => {
    const [active, setActive] = useState('1')

    const toggleTab = tab => {
        if (active !== tab) {
            setActive(tab)
        }
    }
    return (
        <>
            <Row className="justify-content-md-center">
                <Col sm="4">
                    <Label>
                        <span
                            className='bg-primary'
                            style={{ color: 'white', fontSize: 15, padding: 2 }}
                        > 01 </span>
                        CODIGO UNICO CATASTRAL |
                        CUC
                    </Label>
                    <input type="text" className='form-control' />
                </Col>
                <Col sm="4">
                    <Label>
                        <span
                            className='bg-primary'
                            style={{ color: 'white', fontSize: 15, padding: 2 }}
                        // className='bg-primary'
                        // style={{ color: 'white', fontSize: 15, padding: 2 }}
                        >02 </span>
                        CODIGO HOJA CATASTRAL
                    </Label>
                    <input type="text" className='form-control' />
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-2">
                <Col sm="4">
                    <div>
                        <span
                            className='bg-primary'
                            style={{ color: 'white', fontSize: 15, padding: 2 }}
                       
                        >03 </span>
                        CODIGO DE REFERENCIA CATASTRAL
                    </div>
                </Col>

            </Row>
            <Row className="justify-content-md-center">
                <Col sm="4">
                    <p className='text-center'> Ubigeo</p>
                    <Row>
                        <Col>
                            <Label>
                                DPTO
                            </Label>
                            <input type="text" className='form-control' />
                        </Col>
                        <Col>
                            <Label>
                                PROV
                            </Label>
                            <input type="text" className='form-control' />
                        </Col>
                        <Col>
                            <Label>
                                DIST
                            </Label>
                            <input type="text" className='form-control' />
                        </Col>
                    </Row>
                </Col>
                <Col sm="8">
                    <p> _</p>
                    <Row>
                        <Col>
                            <Label>
                                SECTOR
                            </Label>
                            <input type="text" className='form-control' />
                        </Col>

                        <Col>

                            <Label>
                                MANZANA
                            </Label>
                            <input type="text" className='form-control' />
                        </Col>

                        <Col>

                            <Label>
                                LOTE
                            </Label>
                            <input type="text" className='form-control' />
                        </Col>

                        <Col>

                            <Label>
                                EDIFICA
                            </Label>
                            <input type="text" className='form-control' />
                        </Col>

                        <Col>

                            <Label>
                                ENTRADA
                            </Label>
                            <input type="text" className='form-control' />
                        </Col>

                        <Col>

                            <Label>
                                PISO
                            </Label>
                            <input type="text" className='form-control' />
                        </Col>

                        <Col>

                            <Label>
                                UNIDAD
                            </Label>
                            <input type="text" className='form-control' />
                        </Col>

                        <Col>

                            <Label>
                                DC
                            </Label>
                            <input type="text" className='form-control' />
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="justify-content-md-center mt-2">
                <Col sm="3">
                    <Label>
                        <span className='bg-primary'
                            style={{ color: 'white', fontSize: 15, padding: 2 }}>04 </span>
                        COD. CONTRIB. DE RENTAS
                    </Label>
                    <input type="text" className='form-control' />
                </Col>
                <Col sm="3">
                    <Label>
                        <span className='bg-primary'
                            style={{ color: 'white', fontSize: 15, padding: 2 }}>05 </span>
                        CODIGO PREDIAL RENTAS
                    </Label>
                    <input type="text" className='form-control' />
                </Col>
                <Col sm="4">
                    <Label>
                        <span className='bg-primary'
                            style={{ color: 'white', fontSize: 15, padding: 2 }}>06 </span>
                        UNIDAD ACUMULADA A COD. PREDIAL RENTAS
                    </Label>
                    <input type="text" className='form-control' />
                </Col>
            </Row>
            <div className="d-flex justify-content-center">
                <div>

                    <Nav pills className='mb-2 mt-2'>
                        <NavItem>
                            <NavLink active={active === '1'} onClick={() => toggleTab('1')}>
                                <span className='fw-bold'>I</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink active={active === '2'} onClick={() => toggleTab('2')}>
                                <span className='fw-bold'>II</span>
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink active={active === '3'} onClick={() => toggleTab('3')}>
                                <span className='fw-bold'>III</span>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
            </div>
            <TabContent activeTab={active}>
                <TabPane tabId='1'>
                    <FormFichaIndividualPrimer />
                </TabPane>
                <TabPane tabId='2'>
                    <FormFichaIndividualSecun />
                </TabPane>
                <TabPane tabId='3'>
                    <FormFichaIndividualTerce />
                </TabPane>
            </TabContent>

        </>
    )
}

export default FormFichaIndividual