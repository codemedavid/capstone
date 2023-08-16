import React from 'react';
import { Tabs } from 'flowbite-react';

export default function DefaultTabs() {
  return (
    <div className='mt-2'>
      <Tabs.Group 
        aria-label="Default tabs"
        className='w-full flex'
        
      >
        <Tabs.Item
          active
          title="Job Description"
          className='grow'
        >
          <div className='container'>
            <p>Insert Details here</p>
          </div>
        </Tabs.Item>
        <Tabs.Item
          title="Skills"
          className='grow'
        >
          <p>Insert Details here1</p>
        </Tabs.Item>
        <Tabs.Item
          title="Requirements"
          className='grow'
        >
          <p>Insert Details here2</p>
        </Tabs.Item>
        <Tabs.Item
          title="Working Location"
          className='grow'
        >
          <p>Insert Details here3</p>
        </Tabs.Item>
      </Tabs.Group>
    </div>
  );
}

