"use client";

import React from "react";

import { Box, Image, Text, HStack, Flex } from "@chakra-ui/react";

const data = [
  {
    text: "The internet is without a doubt the most important technological development in human history.\
    Web3, 3D Metaverse, AI, IoT, Cloud, and Edge technologies expand the internet as we know it by introducing\
    novel features and advancements. Metaverse will make use of all aspects of modern technology, including\
    3D, VR, AR, AI, blockchain, cloud and edge computing, voice computing, ambient computing, and more.\
    Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse,\
    terms used to depict a future internet vision centered on decentralized technologies and virtual worlds. \
    Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market \
    of up to $13 trillion and five billion people by 2030.",
    image: "/graphics/internet-day-concept-illustration/5118825.jpg",
    color:'#D6F7E7'
  },
  {
    text: "The Program in a Nutshell: Earn While You Learn\
    In this brand-new type of curriculum, students will learn \
    how to make money and boost exports in the classroom and will \
    begin doing so within six months of the program's beginning. \
    It resembles a cross between a corporate venture and an educational project.",
    image: "/graphics/poster-student-loans-scholarship/STUDIO PC 2072-20.jpg",
    color:'#CCD2EC'
  },
  {
    text: "Program of Studies\
    This curriculum is intended for beginners who want to \
    learn software development from the ground up. The first \
    three quarters are shared by all specialties and are dedicated \
    to studying Object-Oriented Programming and cutting-edge Full-Stack \
    Web 2.0 development. It is going to be a fifteen-month-long hybrid \
    program that includes both onsite and online classes and is divided into \
    five quarters of 13 weeks each. The emphasis will be on hands-on learning by \
    educating students to produce projects. To accommodate everyone, courses will \
    be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on weekdays. \
    It employs a hybrid teaching format, with core onsite classes complemented by \
    online Zoom laboratories and recorded videos.",
    image: "/graphics/student-graduation-cap-using-computer-desk/21421.jpg",
    color:'#FFCA56'
  },
  {
    text: "The Outcome for Participants of the Program\
    The graduates of this program will own products \
    (Full-Stack App Templates, AR and VR Experiences, and APIs) \
    that are marketed globally by the Panaverse DAO and, if they like, \
    will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). \
    This would give Pakistani professionals and students a fantastic opportunity to better their financial \
    situation while also giving the economy a much-needed boost by expanding software exports.\
    Top 5 'Metaverse' jobs that will rule the future of tech industry\
    Blockchain Developer Salary - Jun 2022\
    Web3 Salaries Soar to $750,000 for Rank-and-File Devs\
    The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s Uncharted Waters\
    How To Become Metaverse Developer: Scope, Skills, and Salary",
    image: "/graphics/flat-design-business-people-working-together/6236932.jpg",
    color:'#77C9D4'
  },
];



export function Describe() {
  return (
    <Box pb='17px'mt='10px' mb='px' >
      {data.map((item, index) => (
        <Box h='auto'  key={index} pb='17px' mt='10px' bg={item.color}>
          <Flex justifyContent='center' p={'10px'} direction={['column', 'column', 'row']} >
            {index % 2 === 0 ? (
              <>
                <Image
                  src={item.image}
                  width="330px"
                  height="284px"
                />
                <Text w="445px" height="306px" left="670px">
                  {item.text}
                </Text>
              </>
            ) : (
              <>
                <Text w="445px" height="306px">{item.text}</Text>
                <Image
                  src={item.image}
                  width="330px"
                  height="284px"
                />
              </>
            )}
          </Flex>
        </Box>
      ))}
    </Box>
  );
}
