import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronCircleDown, faChevronCircleUp} from '@fortawesome/free-solid-svg-icons';

const usePagination = (data) => {

    let [currentPage,setCurrentPage] = useState(1);
    let pageSize = 3;
    
    const getCurrentPageData = ()=>{
        return data.slice(0, pageSize + (currentPage-1) * pageSize);
    }

    const showButtons = ()=>{
        let next = pageSize + (currentPage-1) * pageSize;
        if(next >= data.length)
        {
            return (
                <div className="pagination-container">
                    <button className="pagination-button" onClick={()=>onClickHandlerLess()}>
                        <FontAwesomeIcon icon={faChevronCircleUp} className="pagination-button-icon" />
                    </button>            
                </div>
            );
        }
        else{
            if(currentPage <=1)
            {
                return (
                    <div className="pagination-container">
                        <button className="pagination-button" onClick={()=>onClickHandlerMore()}>
                            <FontAwesomeIcon icon={faChevronCircleDown} className="pagination-button-icon" />
                        </button>
                    </div>                    
                ); 
            }else{
                return (
                    <div className="pagination-container">
                        <button className="pagination-button" onClick={()=>onClickHandlerMore()}>
                            <FontAwesomeIcon icon={faChevronCircleDown} className="pagination-button-icon" />
                        </button>
                        <button className="pagination-button" onClick={()=>onClickHandlerLess()}>
                            <FontAwesomeIcon icon={faChevronCircleUp} className="pagination-button-icon" />
                        </button>
                    </div>                    
                );
            }
        }
    }

    const onClickHandlerMore = ()=>{
        setCurrentPage(currentPage+1);
    }

    const onClickHandlerLess = ()=>{
        setCurrentPage(currentPage-1);
    }

    return [getCurrentPageData, showButtons];
}
 
export default usePagination;