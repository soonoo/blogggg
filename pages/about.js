import { Layout } from 'Components';

export default () => (
  <Layout>
    <style jsx>{`
        .header {
          font-size: 36px;
          padding: 40px 0 10px 0;
        }
        .wrapper {
          margin-bottom: 30px;
          border-bottom: 1px solid #999;
          padding-bottom: 40px;
        }
        .title {
          font-size: 22px;
          margin-bottom: 15px;
        }
        a.hover {
          text-decoration: underline;
        }
        div {
          padding-left: 10px;
        }
      `}</style>
    <div className='header'>Working experiences</div>
    <div className='wrapper'>
      <div className='title'><a href='http://ad4th.com' target='_blank'>AD4th Insight</a></div>
      <div>
        <div>- 2018. 08 ~ 2018. 09, 프론트엔드 인턴</div>
        <div>- React/redux/react-router를 이용한 프로모션용 SPA(Single Page App) 개발</div>
        <div>- <a target='_blacnk' href='https://webloc.io'>webloc.io</a></div>
      </div>
    </div>
    <div className='header'>Personal projects</div>
    <div className='wrapper'>
      <div className='title'><a target='_black' href='https://soonoo.me'>https://soonoo.me</a></div>
      <div>
        <div>- Next.js / MySQL / Node.js</div>
        <div>- 개인 공부/기록 용도로 운영중인 블로그입니다. 꾸준히 글을 작성하자는 계획을 세웠지만 잘 지키지 못하고 있어 아쉽습니다.</div>
        <div>- hosting on AWS EC2</div>
      </div>
    </div>
    <div className='wrapper'>
      <div className='title'><a target='_black 'href='https://soonoo.github.io/stupid-kw/'>광운대학교 강의계획서 검색기</a></div>
      <div>
        <div>- 교내 정보 시스템(http://info.kw.ac.kr)에서 사용하는 강의계획서 검색 기능의 불편함을 해소하고자 만든 간단한 웹앱입니다.</div>
        <div>- React로 작성했습니다.</div>
        <div>- 학교 커뮤니티에 공개 후 뜨거운 반응을 이끌어 냈으나(약 150여 명의 게시글 추천) GitHub star는 그 누구도 주지 않아 슬펐습니다.</div>
        <div><img style={{width: '300px'}} src='https://s3.ap-northeast-2.amazonaws.com/soonoo.me/3.png' /></div>
        <div><img style={{width: '250px'}} src='https://s3.ap-northeast-2.amazonaws.com/soonoo.me/1.png' /></div>
        <div>- hosting on GitHub pages</div>
      </div>
    </div>
    <div className='wrapper'>
      <div className='title'><a href='https://itunes.apple.com/kr/app/%EA%B4%91%EC%9A%B4%EB%8C%80-%EC%9C%A0%EC%BA%A0%ED%8D%BC%EC%8A%A4/id1362181952?mt=8'>광운대학교 유캠퍼스 - iOS App</a></div>
      <div>
        <div>- 교내 정보 시스템(http://info.kw.ac.kr)이 모바일 페이지를 지원하지 않아 생기는 불편함을 해소하고자 만든 iOS App 입니다.</div>
        <div>- Swift로 작성했지만 지금은 잘 기억나지 않습니다.</div>
        <div>- Auto Layout을 사용해 봤습니다.</div>
        <div>- 1000+ 다운로드</div>
        <div>- 사용자 평점 3.4/5.0 </div>
      </div>
    </div>
    <div className='wrapper'>
      <div className='title'>광운대학교 유캠퍼스 - Android App</div>
      <div>
        <div>- 교내 정보 시스템(http://info.kw.ac.kr)이 모바일 페이지를 지원하지 않아 생기는 불편함을 해소하고자 만든 Android App 입니다.</div>
        <div>- Java로 작성했지만 지금은 잘 기억나지 않습니다.</div>
        <div>- 2700+ 다운로드</div>
        <div>- 사용자 평점 4.3/5.0 </div>
        <div>- 군입대 후 관리가 불가능해진 관계로 현재는 플레이 스토어에 등록되어 있지 않습니다.</div>
        <div><img style={{width: '320px'}} src='https://s3.ap-northeast-2.amazonaws.com/soonoo.me/6.png' /></div>
        <div><img style={{width: '320px'}} src='https://s3.ap-northeast-2.amazonaws.com/soonoo.me/5.png' /></div>
        <div><img style={{width: '320px'}} src='https://s3.ap-northeast-2.amazonaws.com/soonoo.me/8.png' /></div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/_FU1oNu8vTM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </Layout>
);
