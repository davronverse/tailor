// import jQuery
import $ from 'jquery';

// import flowbite
import flowbite from 'flowbite';

// Import Swiper and modules
// https://swiperjs.com/swiper-api#using-js-modules
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';


/**
 * Function Description Goes Here
 */

let hamburgerMenu;
let menuClickNumber;
let desktop_mobile;

const submenu = {
    'submenu_1' : 
        `<div class="header-menu-box grid px-6 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400  md:grid-cols-5 md:px-0">
            <div class="flex md:hidden button-font-size underline items-center">
                <svg class="h-3 w-3 mr-75" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.871 5.25H12V6.75H2.871L6.894 10.773L5.8335 11.8335L0 6L5.8335 0.166504L6.894 1.227L2.871 5.25Z" fill="#14154E"/>
                </svg>
                Back
            </div>
            <div class="border-b-2 border-zinc-200 pt-4 pb-2 md:hidden text-xl text-my-base-purple-700 md:border-b-0">Find a home</div>
            <ul class="mb-4 mt-2 space-y-4 md:mb-0 md:block border-b-2 border-zinc-200 md:border-b-0 md:mt-0" aria-labelledby="mega-menu-full-image-home">
                <li>
                    <a href="/" class="dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-700 text-base md:text-xs lg:text-base">
                        Rent a home
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Home href rent
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Leasehold
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        The renting process
                    </a>
                </li>
            </ul>
            <ul class="mb-4 space-y-4 md:mb-0 border-b-2 border-zinc-200 md:border-b-0">
                <li>
                    <a href="/" class="dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-700 text-base md:text-xs lg:text-base">
                        Buy a home
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Homes href buy
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Help href buy / Shared ownership
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        The buying process
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Why buy with us
                    </a>
                </li>
            </ul>
            <ul class="mb-4 space-y-4 md:mb-0 border-b-2 border-zinc-200 md:border-b-0">
                <li>
                    <a href="/" class="dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-700 text-base md:text-xs lg:text-base">
                        Moving / Exchange home
                    </a>
                </li>
            </ul>
            <ul class="mb-4 space-y-4 md:mb-0 border-b-2 border-zinc-200 md:border-b-0">
                <li>
                    <a href="/" class="dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-700 text-base md:text-xs lg:text-base">
                        Our developments
                    </a>
                </li>
            </ul>
            <div>
                <a href="/">
                    <img class="rounded-md" src="../../dist/img/menu-sub-img.png" alt="Menu Sub Image" />
                </a>
                <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 underline font-medium font-albertSans-medium text-my-base-purple-700 flex mt-1 text-sm">
                    Text button
                    <svg class="ml-1 -mr-1 w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
        </div>`,
    'submenu_2' : `<div class="header-menu-box grid px-6 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400  md:grid-cols-4 md:px-0">
            <div class="flex md:hidden button-font-size underline items-center  ">
              <svg class="h-3 w-3 mr-75" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.871 5.25H12V6.75H2.871L6.894 10.773L5.8335 11.8335L0 6L5.8335 0.166504L6.894 1.227L2.871 5.25Z" fill="#14154E"/>
                </svg>
                Back
            </div>
            <div class="border-b-2 border-zinc-200 pt-4 pb-2 md:hidden text-xl text-my-base-purple-700 md:border-b-0">Advice and Support</div>
            <ul class="mb-4 space-y-4 md:mb-0 md:block border-b-2 border-zinc-200 md:border-b-0" aria-labelledby="mega-menu-full-image-home">
                <li>
                    <a href="/" class="dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-700 text-base md:text-xs lg:text-base">
                        Financial support
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Help with money
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Debt advice pages
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        The renting proces
                    </a>
                </li>
            </ul>
            <ul class="mb-4 space-y-4 md:mb-0 border-b-2 border-zinc-200 md:border-b-0">
                <li>
                    <a href="/" class="dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-700 text-base md:text-xs lg:text-base">
                        Community
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Community services
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Customer service commitments
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Customer voice
                    </a>
                </li>
            </ul>
            <ul class="mb-4 space-y-4 md:mb-0 border-b-2 border-zinc-200 md:border-b-0">
                <li>
                    <a href="/" class="dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-700 text-base md:text-xs lg:text-base">
                        Health and Wellbeing
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Domestic abuse
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Mental health support
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Homelessness
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Safeguarding
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Foodbanks
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Independant living schemes
                    </a>
                </li>
            </ul>
            <ul class="mb-4 space-y-4 md:mb-0 border-b-2 border-zinc-200 md:border-b-0">
                <li>
                    <a href="/" class="dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-700 text-base md:text-xs lg:text-base">
                        Your Future
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Community Investment
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Apply for funding
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Employment and support
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Building for the future
                    </a>
                </li>
            </ul>
                </div>`,
    'submenu_3' : `<div class="header-menu-box grid px-6 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400  md:grid-cols-5 md:px-0">
            <div class="flex md:hidden button-font-size underline items-center  ">
              <svg class="h-3 w-3 mr-75" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.871 5.25H12V6.75H2.871L6.894 10.773L5.8335 11.8335L0 6L5.8335 0.166504L6.894 1.227L2.871 5.25Z" fill="#14154E"/>
                </svg>
                Back
            </div>
            <div class="border-b-2 border-zinc-200 md:hidden text-xl text-my-base-purple-700 md:border-b-0">About Us</div>
            <ul class="mb-4 space-y-4 md:mb-0 md:block border-b-2 border-zinc-200 md:border-b-0" aria-labelledby="mega-menu-full-image-home">
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        News
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Blog
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Place page
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        COVIDS
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Evnets and activities
                    </a>
                </li>
            </ul>
            <!-- @todo - remove redundant markup and set width with of the ul with a class - consider flexbox here -->
            <ul></ul>
            <ul></ul>
            <ul></ul>
            <div>
                <a href="/">
                    <img class="rounded-md" src="../../dist/img/menu-sub-img.png" alt="Menu Sub Image" />
                </a>

                <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 underline font-medium font-albertSans-medium text-my-base-purple-700 flex mt-1 text-sm">
                    Text button
                    <svg class="ml-1 -mr-1 w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
                </div>`,
    'submenu_4' : `<div class="header-menu-box grid px-6 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400  md:grid-cols-4 md:px-0">
            <div class="flex md:hidden button-font-size underline items-center  ">
              <svg class="h-3 w-3 mr-75" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.871 5.25H12V6.75H2.871L6.894 10.773L5.8335 11.8335L0 6L5.8335 0.166504L6.894 1.227L2.871 5.25Z" fill="#14154E"/>
                </svg>
                Back
            </div>
            <div class="border-b-2 border-zinc-200 pt-4 pb-2 md:hidden text-xl text-my-base-purple-700 md:border-b-0">What's going on</div>
            <ul class="mb-4 space-y-4 md:mb-0 md:block border-b-2 border-zinc-200 md:border-b-0" aria-labelledby="mega-menu-full-image-home">
                <li>
                    <a href="/" class="dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-700 text-base md:text-xs lg:text-base">
                        About Us
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Why us
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Our culture
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Our purpose
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Our achivements
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Equality, diversity & inclusion
                    </a>
                </li>
            </ul>
            <ul class="mb-4 space-y-4 md:mb-0 border-b-2 border-zinc-200 md:border-b-0">
                <li>
                    <a href="/" class="dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-700 text-base md:text-xs lg:text-base">
                        Our Performance
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Our leadership
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Our strategy
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Value for money
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Development spend over 500
                    </a>
                </li>
            </ul>
            <ul class="mb-4 space-y-4 md:mb-0 border-b-2 border-zinc-200 md:border-b-0">
                <li>
                    <a href="/" class="dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-700 text-base md:text-xs lg:text-base">
                        Careers
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Latest vacancies
                    </a>
                </li>
            </ul>
            <div>
                <a href="/">
                    <img class="rounded-md" src="../../dist/img/menu-sub-img.png" alt="Menu Sub Image" />
                </a>

                <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 underline font-medium font-albertSans-medium text-my-base-purple-700 flex mt-1 text-sm">
                    Text button
                    <svg class="ml-1 -mr-1 w-4 h-4 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
            </div>
                </div>`,
    'submenu_5' : `<div class="header-menu-box md:grid px-6 py-5 mx-auto text-sm text-gray-500 dark:text-gray-400  md:grid-cols-2 md:px-0">
            <div class="flex md:hidden button-font-size underline items-center  ">
              <svg class="h-3 w-3 mr-75" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.871 5.25H12V6.75H2.871L6.894 10.773L5.8335 11.8335L0 6L5.8335 0.166504L6.894 1.227L2.871 5.25Z" fill="#14154E"/>
                </svg>
                Back
            </div>
            <div class="border-b-2 border-zinc-200 md:hidden text-xl text-my-base-purple-700 md:border-b-0 pt-4 pb-2">My Home</div>
            <ul class="mb-4 space-y-4 md:mb-0 md:block border-b-2 border-zinc-200 md:border-b-0" aria-labelledby="mega-menu-full-image-home">
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Book a repair & repair information
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Pay rent & rent information
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Managin & ending my tenancy
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Living in your home
                    </a>
                </li>
            </ul>
            <ul class="mb-4 space-y-4 md:mb-0 border-b-2 border-zinc-200 md:border-b-0">
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        What is an emergency repair?
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Building and fire safety
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        New tenancy page
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        Tenancy and Customer FAQ's
                    </a>
                </li>
                <li>
                    <a href="/" class="hover-underline-animation hover:text-blue-600 dark:hover:text-blue-500 font-medium font-albertSans-medium text-my-base-purple-600 text-sm md:text-xs lg:text-sm">
                        ASB information & reporting
                    </a>
                </li>
            </ul>
                </div>`,
    'submenu_6' : `<div></div>`,
};

const Header = {

    init() {
        hamburgerMenu = false;
        menuClickNumber = 0;
        desktop_mobile = true;
    },

    // Hamburger Menu Click
    hamburgerMenuClick($hamburgerMenu) {
        if ($hamburgerMenu) {
            // $('#xmark-icon').removeClass('hidden');
            // $('#bar-icon').addClass('hidden');
            $('#submenu-button-group').removeClass('hidden');
            $('#mega-menu-full-image').addClass('fade-in');
            $('#mega-menu-full-image').removeClass('fade-out');
            $('#transition-background').removeClass('hidden');
        } else {
            // $('#xmark-icon').addClass('hidden');
            // $('#bar-icon').removeClass('hidden');
            $('#submenu-button-group').addClass('hidden');
            $('#mega-menu-full-image').hasClass('fade-in') && $('#mega-menu-full-image').addClass('fade-out');
            $('#mega-menu-full-image').removeClass('fade-in');
            $('#transition-background').addClass('hidden');
        }
    },

    //Change Menu State
    menuClickNumberChange($menuClickNumber) {
        for(let i = 1;i <= Object.keys(submenu).length; i++) {
            if ($menuClickNumber == i) {
                $(`#menu-${i}-active`).removeClass('hidden');
                $(`#menu-${i}-no-active`).addClass('hidden');
            } else {
                $(`#menu-${i}-active`).addClass('hidden');
                $(`#menu-${i}-no-active`).removeClass('hidden');
            }
        }

        $('#submenu').html(submenu[`submenu_`+$menuClickNumber] == undefined ? '<div></div>' : submenu[`submenu_`+$menuClickNumber]);

        if ($(window).width() <= 768) {
            $('#submenu div').addClass('fade-in');
        }
    },

    // Header Clear Function
    clearMenu() {
        menuClickNumber = 0;
        Header.menuClickNumberChange(menuClickNumber);
    },

    // Clear Hamburger Menu
    clearHamburer() {
        hamburgerMenu = false;
        Header.hamburgerMenuClick(hamburgerMenu);
    }

};

// export
export default Header;

// initiate
Header.init();

// hamburger menu open click
$('#mega-menu-full-image-button').on({
    mousedown: function () {
        hamburgerMenu = !hamburgerMenu;
        Header.hamburgerMenuClick(hamburgerMenu);
    }
});
$('#transition-background').on({
    mousedown: function () {
        Header.clearMenu();
        hamburgerMenu = !hamburgerMenu;
        Header.hamburgerMenuClick(hamburgerMenu);
    }
});
$('#mobile-xmark-icon').on({
    mousedown: function () {
        Header.clearMenu();
        hamburgerMenu = !hamburgerMenu;
        Header.hamburgerMenuClick(hamburgerMenu);
    }
});

// Submenu Back Button Press
$('#submenu').on("click", "div div:nth-child(1)", function(evnt) {
    $('#submenu div').removeClass('fade-in');
    $('#submenu div').addClass('fade-out');
    setTimeout(Header.clearMenu, 800);
});

//Menu hover and mouse click effect
for(let i = 1;i <= $('#header-menu').children().length; i++) {
    $(`#header-menu li:nth-child(${i})`).on({
        mouseover: function () {
            if ($(window).width() > 768) {
                menuClickNumber = i;
                Header.menuClickNumberChange(menuClickNumber);
            }
        },
        mousedown: function () {
            if ($(window).width() <= 768) {
                if (menuClickNumber == i) {
                    menuClickNumber = 0;
                }
                else {
                    menuClickNumber = i;
                }
                Header.menuClickNumberChange(menuClickNumber);
            }
        }
    });
}

// Mouse come out from menu area
$('#submenu').on({
    mouseleave: function () {
        if ($(window).width() > 768) {
            menuClickNumber = 0;
            Header.menuClickNumberChange(menuClickNumber);
        }
    }
});

//Get Point of Resize of Window
$(window).on("resize", function(event){
    if(desktop_mobile) {
        if($(window).width() <= 768) {
            Header.clearMenu();
            Header.clearHamburer();
            desktop_mobile = false;
        }
    } else {
        if($(window).width() > 768) {
            Header.clearMenu();
            Header.clearHamburer();
            $('#mega-menu-full-image').removeClass('fade-out');
            desktop_mobile = true;
        }
    }
});