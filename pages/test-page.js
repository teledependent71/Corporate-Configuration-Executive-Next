import React from 'react'
import Head from 'next/head'

import { DataProvider, Repeater } from '@teleporthq/react-components'

import authorsResource from '../resources/authors'

const TestPage = (props) => {
  return (
    <>
      <div className="test-page-container">
        <Head>
          <title>test-page - Corporate Configuration Executive</title>
          <meta
            property="og:title"
            content="test-page - Corporate Configuration Executive"
          />
        </Head>
        <DataProvider
          renderSuccess={(context_7y9l1f) => (
            <>
              <h1 id={context_7y9l1f?.Name}>Heading</h1>
            </>
          )}
          initialData={props.context7y9l1fProp}
          persistDataDuringLoading={true}
          key={props?.context7y9l1fProp?.id}
        />
      </div>
      <style jsx>
        {`
          .test-page-container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
        `}
      </style>
    </>
  )
}

export default TestPage

export async function getStaticProps(context) {
  try {
    const context7y9l1fProp = await authorsResource({
      ...context?.params,
    })
    return {
      props: {
        context7y9l1fProp: context7y9l1fProp?.data?.[0],
      },
      revalidate: 60,
    }
  } catch (error) {
    return {
      notFound: true,
    }
  }
}
