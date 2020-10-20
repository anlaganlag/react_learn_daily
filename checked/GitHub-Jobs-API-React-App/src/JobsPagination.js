import React from 'react'
import { Pagination } from 'react-bootstrap'

export default function JobsPagination({ page, setPage, hasNextPage }) {
  function adjustPage(amount) {
    setPage(prevPage => prevPage + amount)
  }

  return (
    <Pagination>
      {/* 不是首页可以向前翻页 */}
      {page !== 1 && <Pagination.Prev onClick={() => adjustPage(-1)} />}
      {/* 在1这里如果不是第一页在可以去第一页 */}
      {page !== 1 && <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>}
      {/* 如果有第三页则需要出现省略符号 */}
      {page > 2 && <Pagination.Ellipsis />}
      {/* 如果大于3,则显示前页码 */}
      {page > 2 && <Pagination.Item onClick={() => adjustPage(-1)}>{page - 1}</Pagination.Item>}
      <Pagination.Item active>{page}</Pagination.Item>
      {hasNextPage && <Pagination.Item onClick={() => adjustPage(1)}>{page + 1}</Pagination.Item>}
      {hasNextPage && <Pagination.Next onClick={() => adjustPage(1)} />}
    </Pagination>
  )
}
