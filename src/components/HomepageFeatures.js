import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '개발자가 알아야 할 CS 지식',
    Svg: require('../../static/img/free-icon-open-book-401579.svg').default,
    description: (
      <>
        개발 지식, 자료구조, 알고리즘, 데이터베이스, 네트워크, 디자인패턴까지
        다양한 지식들을 아카이빙 합니다.
      </>
    ),
  },
  {
    title: '면접 질문',
    Svg: require('../../static/img/job-interview.svg').default,
    description: (
      <>포스팅한 지식과 관련된 나올 수 있는 면접 질문들을 모아 놓습니다.</>
    ),
  },
  {
    title: '꼼꼼한 리뷰',
    Svg: require('../../static/img/rating.svg').default,
    description: (
      <>6명의 팀원들이 서로 틀린 부분은 없는지 점검 또 점검합니다.</>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className='text--center'>
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className='text--center padding-horiz--md'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className='container'>
        <div className='row'>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
