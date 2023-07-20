import { Col, Row } from "reactstrap";
import SalesChart from "../../components/dashboard/SalesChart";
import Feeds from "../../components/dashboard/Feeds";
import ProjectTables from "../../components/dashboard/ProjectTable";
import TopCards from "../../components/dashboard/TopCards";
import bg1 from "../../assets/images/bg/data1.png";
import bg2 from "../../assets/images/bg/data2.png";
import bg3 from "../../assets/images/bg/data3.png";
import bg4 from "../../assets/images/bg/data4.png";
import bg5 from "../../assets/images/bg/data5.png";
import bg6 from "../../assets/images/bg/data6.png";
import bg7 from "../../assets/images/bg/data7.png";
import bg8 from "../../assets/images/bg/data8.png";
import bg11 from "../../assets/images/bg/data11.png";
import bg12 from "../../assets/images/bg/data12.png";
import bg13 from "../../assets/images/bg/data13.png";
import bg14 from "../../assets/images/bg/data14.png";
import bg15 from "../../assets/images/bg/data15.png";
import bg16 from "../../assets/images/bg/data16.png";
import bg17 from "../../assets/images/bg/data17.png";
import bg18 from "../../assets/images/bg/data18.png";
import bg19 from "../../assets/images/bg/data19.png";
import bg20 from "../../assets/images/bg/data20.png";
import bg21 from "../../assets/images/bg/data21.png";
import bg22 from "../../assets/images/bg/data22.png";
import bg23 from "../../assets/images/bg/data23.png";

import {useEffect, useRef} from "react"

import Image from "../../components/dashboard/Image";
import {
  Alert,
  UncontrolledAlert,
  Card,
  CardBody,
  CardTitle,
} from "reactstrap";

const fadeInStyle = {
    opacity: 1,         // 컴포넌트가 보일 때는 opacity를 1로 설정
    transition: 'opacity 1s ease-in',   // 트랜지션 효과 설정
  };

const Result = () => {
   useEffect(() => {
        if ("IntersectionObserver" in window) {
            //let div = document.querySelectorAll('div')
            let Alert = document.querySelectorAll('.Alert')

            console.log(Alert)

            const observer = new IntersectionObserver((entries, observer) => {
                // 화면에 나오면 실행됨
                entries.forEach((entry) => {
                    if(entry.isIntersecting){
                    entry.target.style.opacity = 1;
                    }else{
                    entry.target.style.opacity = 0;
                }// Boolean
                })
            })

            Alert.forEach((element) => observer.observe(element));

        }
    }, [])

  return (

  <Card>
        <CardTitle tag="h6" className="border-bottom p-3 mb-0">
          <i className="bi bi-bell me-2"> </i>
          Project Result
        </CardTitle>
    <CardBody className="">
    <div>
      {/***Top Cards***/}
      <Row>

        <Col xxl="12">
            <Alert color="primary" class = "Alert" style={{ fontSize: '24px', opacity: 1, transition:'all 1.5s'}}>
              1. 상관 분석
            </Alert>
            <Alert color="primary" class = "Alert" style={{opacity: 1, transition:'all 1.5s'}}>
                <div>* 상관분석은 두 변수간에 어떤 선형적 관계를 가지는지 분석하는 기법으로 상관계수를 이용하여 측정함.</div>
                <div>* 상관계수는 -1~1로 산출되며, -1에 가까울수록 두 변수는 음의 상관관계가 있으며 1에 가까울수록 양의 상관관계가 존재한다. R에서는 여러 상관계수 중 피어슨 상관계수를 계산한다.</div>
                <div>R 프로그램의 cor() 함수를 이용하여 상관계수를 구하였고, 다음과 같다.</div>
            </Alert>
        </Col>
        <Col xxl="6">
        <Image image={bg1} />
        </Col>

        <Col xxl="6">
        <Image image={bg2} />
        </Col>
        <Col xxl="12">
            <Alert class = "Alert" color="primary" style={{opacity: 1, transition:'all 1.5s'}}>
                <div>cdh1과 orai1을 제외한 값은 양의 상관관계가 거의 나타나지 않거나, 오히려 음의 상관관계가 나타나는 모습을 보이기에 cdh1과 orai1을 중심적으로 cor.test() 함수를 이용하여 다시 상세하게 상관 분석을 진행하였다. </div>
            </Alert>
        </Col>
        <Col xxl="4">
        <Image image={bg4} />
        </Col>
        <Col xxl="4">
        <Image image={bg5}/>
        </Col>
        <Col xxl="4">
        <Image image={bg6} />
        </Col>
        <Col xxl="12">
            <Alert class = "Alert" color="primary" style={{opacity: 1, transition:'all 1.5s'}}>
                <div>각각의 p-value 값을 확인해보면 cdh1은 0.002598(&lt;0.05), orai1은 0.04415(&lt;0.05)이고 이와 비교하기 위해 분석을 진행한 cacna1은 0.6286(&gt;0.05)임을 알 수 있다. 즉, cdh1 및 orai1은 vdr과 상관성이 존재한다는 것을 확인할 수 있다. </div>
            </Alert>
        </Col>
        <Col xxl="12">
        <br/>
        <br/>
        <br/>
        <br/>
        </Col>

        <Col xxl="12">
            <Alert class="Alert" color="secondary" style={{ fontSize: '24px', opacity: 1, transition:'all 1.5s'}}>
              2. Plot 확인
            </Alert>
        </Col>

        <Col xxl="6">
        <Image image={bg7}/>
        </Col>
        <Col xxl="6">
        <Image image={bg8} />
        </Col>

        <Col xxl="12">
        <Alert class="Alert" color="secondary" style={{opacity: 1, transition:'all 1.5s'}}>
                <div>각각 vdr, cdh1과 vdr,orai1의 산점도이다. </div>
        </Alert>

        </Col>

         <Col xxl="12">
        <br/>
        <br/>
        <br/>
        <br/>
        </Col>

        <Col xxl="12">
            <Alert class="Alert" color="success" style={{ fontSize: '24px', opacity: 1, transition:'all 1.5s'}}>
              3. 단순선형회귀분석 및 회귀직선
            </Alert>
            <Alert class="Alert" color="success" style={{opacity: 1, transition:'all 1.5s'}}>
                <div>* 결정계수는 회귀 모델에서 독립변수가 종속변수를 얼마만큼 설명해 주는지를 가리키는 지표로, 설명력이라고 불린다. 하지만, 결정계수는 독립변수의 수가 증가하면 상승한다는 단점이 있기에 이의 대안으로 등장한 조정된 결정계수를 함께 계산해주었다.  </div>
        </Alert>
        </Col>
        <Col xxl="7">
        <Image image={bg11}/>
        </Col>
        <Col xxl="5">
        <Image image={bg12} />
        </Col>
        <Col xxl="12">
            <Alert class="Alert" color="success" style={{opacity: 1, transition:'all 1.5s'}}>
                <div>vdr, cdh1의 회귀분석을 진행하면 다음과 같이 나타나는 모습을 볼 수 있다. 결정계수는 0.3092, 조정된 결정계수는 0.2816임을 알 수 있다. 이는 cdh1을 설명하는 데 필요한 변수가 vdr뿐만 아니라 다른 변수들도 존재함을 보여준다. </div>
                     </Alert>
        </Col>
        <Col xxl="7">
        <Image image={bg13}/>
        </Col>
        <Col xxl="5">
        <Image image={bg14} />
        </Col>
                <Col xxl="12">
            <Alert class="Alert" color="success" style={{opacity: 1, transition:'all 1.5s'}}>
                <div>vdr, orai1의 회귀분석을 진행하면 다음과 같이 나타나는 모습을 볼 수 있다. 결정계수는 0.1323, 조정된 결정계수는 0.1184임을 알 수 있다. 이는 설명력이 그리 높지 않고, 앞선 cdh1처럼 다른 변수들이 orai1에 영향을 미침을 알 수 있다. </div>
                </Alert>
        </Col>

        <Col xxl="12">
        <br/>
        <br/>
        <br/>
        <br/>
        </Col>

        <Col xxl="12">
            <Alert class="Alert" color="danger" style={{ fontSize: '24px', opacity: 1, transition:'all 1.5s'}}>
              4. 아웃라이어 제거
            </Alert>
            <Alert class="Alert" color="danger" style={{opacity: 1, transition:'all 1.5s'}}>
                <div>* 아웃라이어는 나머지 관측값들과는 달리 주어진 모형을 따르지 않는 관측값을 의미한다. </div>
                <div>Plot을 보면 아웃라이어가 존재함을 예상해볼 수 있기에 먼저 영향력 있는 관측값(Influential observation)을 확인해보았다. 이때 쿡거리(cook’s distance)를 이용하여 자료의 중심에서 특정점까지의 거리를 재어보았다. </div>
                <div>Cooks.disatance() 함수를 이용하여 최대 쿡거리와 평균 쿡거리를 확인해보았다. </div>
        </Alert>
        </Col>
        <Col xxl="7">
        <Image image={bg15}/>
        </Col>
        <Col xxl="12">
            <Alert class="Alert" color="danger" style={{opacity: 1, transition:'all 1.5s'}}>
                <div>1을 절대적 기준으로 판단하면 특별히 영향력이 큰 관측지가 없다고 판단할 수 있지만, 상대적 쿡거리를 확인하면 다를 수 있기에 olsrr 패키지의 ols_plot_cooksd_bar()함수를 이용하여 상대적인 쿡거리를 비교하였다.  </div>
        </Alert>
        </Col>
        <Col xxl="6">
        <Image image={bg16}/>
        </Col>
         <Col xxl="12">
            <Alert class="Alert" color="danger" style={{opacity: 1, transition:'all 1.5s'}}>
                <div>그래프를 보면, 26번 관측값이 기준값(Threshold)인 0.148을 넘는 것을 알 수 있다. 이는 26번 관측값이 영향력 있는 관측값이라는 것을 의미한다. </div>
                <div>추가적으로, outlierTest() 함수를 이용하여 vdr, cdh1회귀곡선의 아웃라이어를 확인해보았다. </div>
            </Alert>
        </Col>
        <Col xxl="7">
        <Image image={bg17}/>
        </Col>
        <Col xxl="12">
            <Alert class="Alert" color="danger" style={{opacity: 1, transition:'all 1.5s'}}>
                <div>26번째 관측값의 스튜던트화 잔차값이 4.449779로 출력되었고, Bonferroni p 값은 0에 가까우므로 이 값은 특이값으로 판단된다. </div>
                <div>* Bonferroni t-검정은 대표적인 사후검정법으로 특이값 진행을 하는 데 사용할 수 있다. </div>
                <div>이에 26번 관측값을 아웃라이어로 판단하고 제거하기로 하였다. </div>
                <br/>
                <div>또한, vdr, orai1 회귀곡선의 아웃라이어도 확인해보았다.  </div>
                <div>같은 방식으로 영향력 있는 관측값을 확인해보았고 결과는 다음과 같다.</div>
            </Alert>
        </Col>
        <Col xxl="6">
        <Image image={bg19}/>
        </Col>
        <Col xxl="6">
        <Image image={bg18}/>
        </Col>

      <Col xxl="12">
            <Alert class="Alert" color="danger" style={{opacity: 1, transition:'all 1.5s'}}>
                <div>절대적 기준값인 1을 넘지는 않지만 상대적으로 비교해보았을 때 5,6,21번 관측값이 영향력 있는 관측값임을 확인할 수 있다.  </div>
                <div>outlierTest() 함수를 이용하여 Bonferroni p값을 확인해보았다.</div>
            </Alert>
        </Col>
        <Col xxl="7">
        <Image image={bg20}/>
        </Col>
         <Col xxl="12">
            <Alert class="Alert" color="danger" style={{opacity: 1, transition:'all 1.5s'}}>
                <div>Bonferroni p값이 0.25564이므로 영향력 있는 관측값이 존재하기는 하나 이를 아웃라이어로 판단하기는 어렵다는 사실을 알 수 있다.  </div>

            </Alert>
        </Col>
                <Col xxl="12">
        <br/>
        <br/>
        <br/>
        <br/>
        </Col>
           <Col xxl="12">
            <Alert class="Alert" color="warning" style={{ fontSize: '24px', opacity: 1, transition:'all 1.5s'}}>
              5. cdh1 아웃라이어 제거 후 상관성분석 및 단순선형회귀분석
            </Alert>
            </Col>
            <Col xxl="9">
        <Image image={bg21}/>
        </Col>
        <Col xxl="6">
        <Image image={bg22}/>
        </Col>
        <Col xxl="6">
        <Image image={bg23}/>
        </Col>
        <Col xxl="12">
            <Alert class="Alert" color="warning" style={{opacity: 1, transition:'all 1.5s'}}>
                <div>cdh1의 아웃라이어(26번 관측치)를 제거한 후 상관성 분석과 단순선형회귀분석을 앞서 진행했던 방식과 동일하게 진행해보았다. 상관계수가 0.5560507에서 0.7082769로 상승한 모습을 볼 수 있고, 결정계수가 조정된 결정계수도 각각 0.3092에서 0.5017로, 0.2816에서 0.4809로 상승한 모습을 볼 수 있다. </div>

            </Alert>
        </Col>
              <Col xxl="12">
        <br/>
        <br/>
        <br/>
        <br/>
        </Col>

        <Col xxl="12">
            <Alert class="Alert" color="info" style={{ fontSize: '24px', opacity: 1, transition:'all 1.5s'}}>
              6. 결론
            </Alert>
            <Alert class="Alert" color="info" style={{opacity: 1, transition:'all 1.5s'}}>
                <div>vdr과 수용체의 상관분석을 진행한 결과 cdh1, orai1, cacna1, cacna2d1, ATP2B1, CACNAB2 중 cacna1, cacna2d1, ATP2B1, CACNAB2는 상관이 존재하지 않는 모습을 확인할 수 있었다. 다음으로 단순선형회귀분석을 진행한 결과 orai1은 약한 상관관계와 설명력을 보이는 것을 확인할 수 있었고, cdh1은 강한 상관관계 및 설명력을 보이는 것을 확인할 수 있었다. 또한, cdh1 수용체의 기관 내 발현량 비율을 비교하면 colon, duodenum 등에서 많이 발현됨을 알 수 있었다.  </div>
                <div>결론적으로 vdr은 cdh1 수용체의 발현에 영향을 미침을 알 수 있다. </div>
        </Alert>
        </Col>


      </Row>
    </div>
      </CardBody>
      </Card>
  );
};

export default Result;