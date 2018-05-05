import React from 'react';

const TagPageTitle = ({tagName}) => (
    <div className="tag_description">
        {tagName} 태그가 포함된 글 목록
        <style>{`
        .tag_description {
            padding-left: 10px;
        }
        `}</style>
    </div>
);

export default TagPageTitle;
