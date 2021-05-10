import React from 'react'

export interface PaginatorProps {
    pages: number
    current: number
    onPageChange?: (page: number) => void
}

export const Paginator: React.FC<PaginatorProps> = (
    {
        pages,
        current,
        onPageChange = () => null,
    }) => {
    const [lower, upper] = paginate(pages, 5, current)
    return (
        <nav aria-label="News navigation">
            <ul className="pagination justify-content-center">
                <Previous disabled={current === 1} onClick={() => onPageChange(current - 1)}/>
                {rangeTo(lower, upper).map(i =>
                    <PageItem key={i} value={i}
                              active={i === current}
                              onClick={onPageChange}
                    />)}
                <Next disabled={pages === current} onClick={() => onPageChange(current + 1)}/>
            </ul>
        </nav>
    )
}

type PageBoundaries = [number, number]

function paginate(pages: number, size: number, current: number): PageBoundaries {
    const middle = Math.ceil(size / 2)
    const span = Math.floor(size / 2)
    if (current < middle) return [1, Math.min(pages, size)]
    if (current > pages - span) return [Math.max(1, pages - size), pages]
    return [current - span, current + span]
}

function rangeTo(from: number, to: number): number[] {
    const items = []
    for (let i = from; i <= to; i++)
        items.push(i)
    return items
}

interface PageItemProps {
    value: number
    active: boolean
    onClick: (page: number) => void
}

const PageItem: React.FC<PageItemProps> = ({value, active, onClick}) =>
    <li className={`page-item ${active ? 'active' : ''}`}>
        <button className="page-link" onClick={() => onClick(value)}>{value}</button>
    </li>

interface PreviousNextProps {
    disabled: boolean
    onClick: () => void
}

const Previous: React.FC<PreviousNextProps> = ({onClick, disabled}) => {
    if (disabled) return (
        <li className="page-item disabled">
            <span aria-label="Previous" className="page-link">&laquo;</span>
        </li>)
    else return (
        <li className="page-item">
            <button className="page-link" aria-label="Previous" onClick={onClick}>
                <span aria-hidden="true">&laquo;</span>
            </button>
        </li>)
}

const Next: React.FC<PreviousNextProps> = ({onClick, disabled}) => {
    if (disabled) return (
        <li className="page-item disabled">
            <span aria-label="Next" className="page-link">&raquo;</span>
        </li>)
    else return (
        <li className="page-item">
            <button className="page-link" aria-label="Next" onClick={onClick}>
                <span aria-hidden="true">&raquo;</span>
            </button>
        </li>)
}
