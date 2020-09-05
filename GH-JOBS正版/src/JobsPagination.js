import React from 'react'
import { Pagination } from 'react-bootstrap'

function JobsPagination({ page, setPage, hasNextPage }) {
  function adjustPage(amount) {//翻頁功能
    setPage(prevPage => prevPage + amount)
  }

  return (
    <Pagination>
      {/* 前一頁 */}
      {page !== 1 && <Pagination.Prev onClick={() => adjustPage(-1)} />}
      {/* 第一頁 */}
      {page !== 1 && <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>}
      {/* 省略符號 */}
      {page > 2 && <Pagination.Ellipsis />}
      {page > 2 && <Pagination.Item onClick={() => adjustPage(-1)}>{page - 1}</Pagination.Item>}
      {/* 當前頁 */}

      <Pagination.Item active>{page}</Pagination.Item>
      {hasNextPage && <Pagination.Item onClick={() => adjustPage(1)}>{page + 1}</Pagination.Item>}
      {hasNextPage && <Pagination.Next onClick={() => adjustPage(1)} />}
    </Pagination>
  )
}

export default JobsPagination