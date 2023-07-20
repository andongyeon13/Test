import React from 'react';
import './Dropdown.css';
import Dropdown from './Dropdown';
import {
  Alert,
  UncontrolledAlert,
  Card,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col
} from "reactstrap";
import Image from "../../components/dashboard/Image";
import bg1 from "../../assets/images/bg/bg1.jpg";

const ImageData = [
  {
    image: bg1,
  },
]

const DropdownPage = props => {
    const [dropdownVisibility, setDropdownVisibility] = React.useState(false);
    const [dropdownVisibility2, setDropdownVisibility2] = React.useState(false);
    const [dropdownVisibility3, setDropdownVisibility3] = React.useState(false);
    const [dropdownVisibility5, setDropdownVisibility5] = React.useState(false);

    return (
        <div id='app'>
      {/* --------------------------------------------------------------------------------*/}
      {/* Card-1*/}
      {/* --------------------------------------------------------------------------------*/}
      <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2"> </i>
          Project Log
        </CardTitle>

        <CardBody className="">
          <div className="mt-3">
            <Alert color="primary">
                <Row className="justify-content-start">
                    <div className="d-flex align-items-center" style={{ height: '5vh' }}>
                        <Col sm="1">
                            <Button className="btn" color="primary" onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                            {
                            dropdownVisibility
                            ? 'Close'
                            : 'Open'
                            }
                            </Button>
                        </Col>
                        <Col sm="10">
                            <div style={{ fontSize: '24px' }}>1. 희귀질환 연구 및 비타민D 연구가 필요한 이유</div>
                        </Col>
                    </div>

                    <Dropdown visibility={dropdownVisibility}>
                    <ul>
                        <br/>
                        <li>현대 사회에 접어들며, 대부분의 영양 결핍 질환은 전 세계적으로 사라져 가는 추세입니다. 그러나 비타민D만은 예외입니다. 비타민D는 태양의 자외선 B 방사선에 의해 피부합성으로 대부분 획득되며 식이 공급원은 매우 제한적입니다. 하지만 실내 생활 방식과 대기 오염을 포함한 환경의 급격한 변화로, 비타민D의 결핍은 현대 사회에서 만연한 문제로 자리매김했습니다. [1] 비타민D의 결핍은 단순히 칼슘 조절에만 영향을 주지 않습니다. 종양, 심혈관 질환이나 당뇨병 같은 만성 질환, 신경 정신 장애와 자가 면역 질환, 심지어는 세포의 증식과 분화, 면역의 조절 등 다양한 생물학적 대사 과정에 악영향을 미칩니다. 한 문장으로 정리하자면, 비타민D의 충분하지 못한 섭취는 신체 여러 부분에 해를 가하고 이미 존재하는 질병을 악화시킵니다. [2] 하나의 단적인 예시로, 희귀자가면역질환인 전신 홍반성 루푸스의 경우 비타민D 섭취량에 따라 증상이 악화하거나 호전될 수 있음이 이전의 연구를 통해 밝혀진 바 있습니다. [3] 따라서 희귀질환을 포함하는 여러 질병의 치료에 있어서, 비타민D가 생물학적 대사에 지대한 영향을 미침을 고려할 때 비타민D에 관한 연구는 필요합니다.</li>
                    </ul>
                    </Dropdown>
                </Row>
            </Alert>

            <Alert color="secondary">
                <Row className="justify-content-start">
                    <div className="d-flex align-items-center" style={{ height: '5vh' }}>
                        <Col sm="1">
                            <Button className="btn2" color="secondary" onClick={e => setDropdownVisibility2(!dropdownVisibility2)}>
                            {
                            dropdownVisibility2
                            ? 'Close'
                            : 'Open'
                            }
                            </Button>
                        </Col>
                        <Col sm="10">
                            <div style={{ fontSize: '24px' }}>2. 비타민D와 희귀질환의 연관성을 수용체로 분석</div>
                        </Col>
                    </div>

                    <Dropdown visibility={dropdownVisibility2}>
                    <ul>
                        <br/>
                        <li>이번 진로연계프로젝트에서는 비타민D과 osteogenesis 사이의 연관성을 비타민D 수용체가 얼마나 많이 발현되는지를 기준으로 분석했습니다. 최근 분자생물학 분야에서 비타민D 수용체 유전자의 다형성을 통해 질병의 위험도나 예후를 분석하는 것이 활발해진 만큼, 저희도 프로젝트를 진행할 때 비타민D 수용체에 초점을 맞춰 진행하는 것이 더 좋겠다고 생각했습니다. 특히, 비타민D 수용체는 유전자 발현에 따라 그 종류가 다르다는 사실을 통해[4] 수용체와 각 유전자의 비교가 의미 있을 것이라 생각했습니다. 또, 일일히 모집단을 구성해 혈중 비타민D 농도를 수집하는 과정이 현실적으로 불가능했기에, 이미 인터넷 상에 데이터가 존재하는 비타민D 수용체의 발현량에 관한 정보를 활용해 프로젝트를 진행했습니다. NCBI Genome Data Viewer[5]를 적극적으로 활용했습니다. 구체적 데이터는 엑셀을 통해 볼 수 있도록 첨부해 두었습니다.</li>
                    </ul>
                    </Dropdown>
                </Row>
            </Alert>

            <Alert color="success">
                <Row className="justify-content-start">
                    <div className="d-flex align-items-center" style={{ height: '5vh' }}>
                        <Col sm="1">
                            <Button className="btn3" color="success" onClick={e => setDropdownVisibility3(!dropdownVisibility3)}>
                            {
                            dropdownVisibility3
                            ? 'Close'
                            : 'Open'
                            }
                            </Button>
                        </Col>
                        <Col sm="10">
                            <div style={{ fontSize: '24px' }}>3. 해당 페이지의 유용성</div>
                        </Col>
                    </div>

                    <Dropdown visibility={dropdownVisibility3}>
                    <ul>
                        <br/>
                        <li>이 페이지에는 인체의 각 부위에서 비타민D 수용체와 칼슘 수용체가 발현되는 정도를 가시화한 그림을 볼 수 있습니다. 비타민d 수용체를 포함해 총 7개의 항목(vdr, cdh1,oari1, cacna1, cacna2d1, atp2b1, cacnb2)에 대해 각각이 분포하는 위치에 따라 해골 그림 위에 하이라이트를 표시했습니다. 선택 박스 내의 각 항목을 선택했을 때 해골 위에 하이라이트가 나타납니다. 비타민D 수용체와 발현되는 부위가 비슷한 칼슘 수용체는 비타민D 수용체와 대사과정에서 모종의 연관성이 존재합니다. 이 연관성을 향후 추가적인 연구에 활용할 수 있을 것입니다. 예를 들어 만약 희귀질환을 다루기 위해 비타민D 수용체를 이용해 칼슘의 대사를 늘리거나 줄이고 싶은 경우, 이러한 연관성을 활용해 어떤 칼슘 수용체가 반응할 것인지를 예측할 수 있습니다.</li>
                    </ul>
                    </Dropdown>
                </Row>
            </Alert>

            <Alert color="danger">
                <Row className="justify-content-start">
                    <div className="d-flex align-items-center" style={{ height: '5vh' }}>
                        <Col sm="1">
                            <Button className="btn5" color="danger" onClick={e => setDropdownVisibility5(!dropdownVisibility5)}>
                            {
                            dropdownVisibility5
                            ? 'Close'
                            : 'Open'
                            }
                            </Button>
                        </Col>
                        <Col sm="10">
                            <div style={{ fontSize: '24px' }}>4. 참고문헌</div>
                        </Col>
                    </div>

                    <Dropdown visibility={dropdownVisibility5}>
                    <ul>
                        <br/>
                        <li>[1] Ju-Hyun Park et al… (2018). Vitamin status in South Korea population. Medicine(Baltimore). Published online 2018 Jun 29. (doi: 10.1097/MD.0000000000011032)</li>
                        <li>[2] Hanmin Wang et al… (2017). Vitamin D and Chronic Diseases. Aging Dis. 8(3) 346-353. Published online 2017 May 2 (doi: 10.14336/AD.2016.1021)</li>
                        <li>[3] Marwa K. Khairallah et al… (2020). Vitamin D in active systemic lupus erythematosus and lupus nephritis: a forgotten player. The Egyptian Journal of Internal Medicine 32, 16. </li>
                        <li>[4] Jurutka, P.W., Whitfield, G.K., Hsieh, JC. et al. Molecular Nature of the Vitamin D Receptor and its Role in Regulation of Gene Expression. Rev Endocr Metab Disord 2, 203–216 (2001).</li>
                        <li>[5] https://www.ncbi.nlm.nih.gov/genome/gdv/browser/gene/?id=7421</li>
                        <li>[6] https://www.cancer.net/cancer-types/hereditary-diffuse-gastric-cancer</li>
                    </ul>
                    </Dropdown>
                </Row>
            </Alert>

          </div>
        </CardBody>
      </Card>

        </div>
    )
};

export default DropdownPage;