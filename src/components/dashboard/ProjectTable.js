import { Card, CardBody, CardTitle, CardSubtitle, Table } from "reactstrap";

const tableData = [
  {
    name: "정세인",
    email: "donna091022@gmail.com",
    role: "Team Leader & Bio Engineer",
    comment: "한 줄 코멘트"
  },
    {
    name: "구윤서",
    email: "kuyoonseo@gmail.com",
    role: "Bio Engineer",
    comment: "한 줄 코멘트"
  },
    {
    name: "안동연",
    email: "a56634368@gmail.com",
    role: "Programmer",
    comment: "한 줄 코멘트"
  },
    {
    name: "이승진",
    email: "seungjin0510@naver.com",
    role: "Statistics Analyst",
    comment: "한 줄 코멘트"
  },
    {
    name: "정혜린",
    email: "sarahj2531@naver.com",
    role: "Bio Engineer",
    comment: "한 줄 코멘트"
  },
    {
    name: "천우영",
    email: "brian1000jj@gmail.com",
    role: "Programmer",
    comment: "한 줄 코멘트"
  },

];

const ProjectTables = () => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">VDR PROJECT</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            Member overview
          </CardSubtitle>

          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>Name & E-mail</th>
                <th>Role</th>


              </tr>
            </thead>
            <tbody>
              {tableData.map((tdata, index) => (
                <tr key={index} className="border-top">
                  <td>
                    <div className="d-flex align-items-center p-2">
                      <div className="ms-1">
                        <h6 className="mb-0">{tdata.name}</h6>
                        <span className="text-muted">{tdata.email}</span>
                      </div>
                    </div>
                  </td>

                  <td>{tdata.role}</td>


                </tr>
              ))}
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectTables;
