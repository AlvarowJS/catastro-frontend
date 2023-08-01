import React, { useState } from 'react'
import { Col, Label, Row, Nav, NavItem, NavLink, TabContent, TabPane, Button, Table } from 'reactstrap'
const FormFichaIndividualPrimer = () => {
  const [inputs, setInputs] = useState(['']); // Estado para almacenar los valores de los inputs

  // Función para agregar un nuevo input vacío
  const addInput = () => {
    setInputs([...inputs, '']);
  };

  // Función para eliminar un input específico
  const removeInput = (index) => {
    const updatedInputs = [...inputs];
    updatedInputs.splice(index, 1);
    setInputs(updatedInputs);
  };

  // Función para actualizar el valor de un input
  const handleInputChange = (index, event) => {
    const updatedInputs = [...inputs];
    updatedInputs[index] = event.target.value;
    setInputs(updatedInputs);
  };

  return (
    <>
      <h2>Ubicación del predio Catastral</h2>
      <div style={{ overflowX: 'auto' }}>
        <Table bordered>
          <thead>
            <tr>
              <th className='py-1'><span className='bg-primary'
                style={{ color: 'white', fontSize: 15, padding: 2 }}>07</span></th>
              <th width="400px" className='px-1'></th>
              <th className='px-1'><span className='bg-primary'
                style={{ color: 'white', fontSize: 15, padding: 2 }}>08</span></th>
              <th width="400px" className='px-1'><span className='bg-primary'
                style={{ color: 'white', fontSize: 15, padding: 2 }}>09</span></th>
              <th className='px-1'><span className='bg-primary'
                style={{ color: 'white', fontSize: 15, padding: 2 }}>10</span></th>
              <th className='px-1'><span className='bg-primary'
                style={{ color: 'white', fontSize: 15, padding: 2 }}>11</span></th>
              <th className='px-1'><span className='bg-primary'
                style={{ color: 'white', fontSize: 15, padding: 2 }}>12</span></th>
              <th className='px-1'><span className='bg-primary'
                style={{ color: 'white', fontSize: 15, padding: 2 }}>13</span></th>
              <th className='px-1'></th>
            </tr>
            <tr>
              <th className='py-1'>CODIGO DE VÍA</th>
              <th width="400px" className='px-1'>NOMBRE DE LA VÍA</th>
              <th className='px-1'>TIPO DE VIA</th>
              <th width="400px" className='px-1'>NOMBRE DEL TIPO DE VIA</th>
              <th className='px-1'>TIPO PUERTA</th>
              <th className='px-1'>Nº MUNICIPAL</th>
              <th className='px-1'>CONDICIÓN NUMERACIÓN</th>
              <th className='px-1'>Nº CERTIFICADO DE NUMERACIÓN</th>
              <th className='px-1'>Quitar</th>
            </tr>
          </thead>
          <tbody>
            {inputs.map((input, index) => (
              <tr key={index}>
                <td className='mb-1'>
                  <input
                    className='form-control'
                    type="text"
                  // value={input}
                  // onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    className='form-control'
                    type="text"
                  // value={input}
                  // onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    className='form-control'
                    type="text"
                  // value={input}
                  // onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    className='form-control'
                    type="text"
                  // value={input}
                  // onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    className='form-control'
                    type="text"
                  // value={input}
                  // onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    className='form-control'
                    type="text"
                  // value={input}
                  // onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    className='form-control'
                    type="text"
                  // value={input}
                  // onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td>
                  <input
                    className='form-control'
                    type="text"
                  // value={input}
                  // onChange={(e) => handleInputChange(index, e)}
                  />
                </td>
                <td>
                  <Button onClick={() => removeInput(index)}>x</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* Botón para agregar un nuevo input */}
        <Button onClick={addInput}>Agregar</Button>
      </div>

      <Row className='mt-2'>
        <Col>
          <div class="form-group row">
            <label for="" class="col-sm-2 col-form-label">
              <span
                className='bg-primary'
                style={{ color: 'white', fontSize: 15, padding: 2 }}

              >14 </span>
              NOMBRE EDIF.
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" />
            </div>
          </div>
        </Col>
        <Col>
          <div class="form-group row">
            <label for="" class="col-sm-2 col-form-label">
              <span
                className='bg-primary'
                style={{ color: 'white', fontSize: 15, padding: 2 }}

              >15 </span>
              TIPO EDIF.
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" />
            </div>
          </div>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <div class="form-group row">
            <label for="" class="col-sm-2 col-form-label">
              <span
                className='bg-primary'
                style={{ color: 'white', fontSize: 15, padding: 2 }}

              >16 </span>
              TIPO DE INTERIOR.
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" />
            </div>
          </div>
        </Col>
        <Col>
          <div class="form-group row">
            <label for="" class="col-sm-2 col-form-label">
              <span
                className='bg-primary'
                style={{ color: 'white', fontSize: 15, padding: 2 }}

              >17 </span>
              Nº INTERIOR
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" />
            </div>
          </div>
        </Col>
        <Col>
          <div class="form-group row">
            <label for="" class="col-sm-2 col-form-label">
              <span
                className='bg-primary'
                style={{ color: 'white', fontSize: 15, padding: 2 }}

              >18 </span>
              CODIGO DE HU
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" />
            </div>
          </div>
        </Col>
      </Row>

      <Row>
        <Col>
          <Label>
            <span
              className='bg-primary'
              style={{ color: 'white', fontSize: 15, padding: 2 }}
            > 19 </span>
            NOMBRE DE LA HABILITACIÓN URBANA
          </Label>
          <input type="text" className='form-control' />
        </Col>
        <Col>
          <Label>
            <span
              className='bg-primary'
              style={{ color: 'white', fontSize: 15, padding: 2 }}
            >20 </span>
            ZONA / SECTOR / ETAPA
          </Label>
          <input type="text" className='form-control' />
        </Col>
        <Col>
          <Label>
            <span
              className='bg-primary'
              style={{ color: 'white', fontSize: 15, padding: 2 }}
            > 21 </span>
            MANZANA
          </Label>
          <input type="text" className='form-control' />
        </Col>
        <Col>
          <Label>
            <span
              className='bg-primary'
              style={{ color: 'white', fontSize: 15, padding: 2 }}
            >22 </span>
            LOTE
          </Label>
          <input type="text" className='form-control' />
        </Col>
        <Col>
          <Label>
            <span
              className='bg-primary'
              style={{ color: 'white', fontSize: 15, padding: 2 }}
            >23 </span>
            SUB-LOTE
          </Label>
          <input type="text" className='form-control' />
        </Col>
      </Row>

      <h2>Identificación del Titular Catastral</h2>
      <Row className='mt-2'>
        <Col>
          <div class="form-group row">
            <label for="" class="col-sm-2 col-form-label">
              <span
                className='bg-primary'
                style={{ color: 'white', fontSize: 15, padding: 2 }}

              >24 </span>
              TIPO TITULAR
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" />
            </div>
          </div>
        </Col>
        <Col>
          <div class="form-group row">
            <label for="" class="col-sm-2 col-form-label">
              <span
                className='bg-primary'
                style={{ color: 'white', fontSize: 15, padding: 2 }}

              >25 </span>
              ESTADO CIVIL
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" />
            </div>
          </div>
        </Col>
      </Row>
      <Row className='mt-2'>
        <Col>
          <div class="form-group row">
            <label for="" class="col-sm-2 col-form-label">
              <span
                className='bg-primary'
                style={{ color: 'white', fontSize: 15, padding: 2 }}

              >26 </span>
              TIPO DOC. IDENTIDAD
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" />
            </div>
          </div>
        </Col>
        <Col>
          <div class="form-group row">
            <label for="" class="col-sm-2 col-form-label">
              <span
                className='bg-primary'
                style={{ color: 'white', fontSize: 15, padding: 2 }}

              >27 </span>
              NUM DOC.
            </label>
            <div class="col-sm-10">
              <input type="text" class="form-control" />
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default FormFichaIndividualPrimer