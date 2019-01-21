import { Layout, PointEditor } from 'Components';
import fetch from 'isomorphic-unfetch';
import { format } from 'date-fns';
import marked from 'marked';

const formattedDate = (date) => format(date, 'YYYY/MM/DD');

const Point = ({ data, url }) => (
  <Layout>
    <style jsx>{`
      .point-item {
        border: 1px solid #bbb;
        margin: 10px 20px 20px 10px;
        border-radius: 4px;
        padding: 15px;
      }
      .point-title {
        font-size: 18px;
        font-weight: bold;
      }
      .point-date {
        font-size: 14px;
        color: gray;
        margin-bottom: 10px;
      }
      .point-contents {

      }
    `}</style>
  {url.asPath === '/point/write' ?
      <PointEditor /> :
      data.map((item) => {
        return (
          <div key={item.id} className='point-item'>
            <div className='point-title'>{item.title}</div>
            <div className='point-date'>{formattedDate(item.create_at)}</div>
            <div className='point-contents' dangerouslySetInnerHTML={{ __html: marked(item.contents) }}></div>
          </div>
        );
      })
  }
</Layout>
);

Point.getInitialProps = async () => {
  const response = await fetch(`http://localhost:8080/api/points/list`);
  const data = await response.json();

  return {
    data,
  }
};

export default Point;

