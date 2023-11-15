import Image from "next/image";

export const Logo = () => {
  return <Image alt="logo" src={"/images/logo.png"} width={75} height={75} />;
};

export const Naming = () => {
  return (
    <Image alt="logo" src={"/images/naming.png"} width={140} height={24} />
  );
};
export const Success = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="51"
      height="51"
      viewBox="0 0 51 51"
      fill="none"
    >
      <path
        d="M7.02734 45.8488C6.08984 45.8488 5.15234 44.9113 5.15234 43.9738V7.09882C5.15234 6.16132 6.08984 5.22382 7.02734 5.22382H43.9023C44.8398 5.22382 45.7773 6.16132 45.7773 7.09882V43.9738C45.7773 44.9113 44.8398 45.8488 43.9023 45.8488H7.02734Z"
        fill="#01A0C7"
      />
      <path
        d="M43.9023 6.78632C44.2148 6.78632 44.2148 6.78632 43.9023 6.78632L44.2148 43.9738C44.2148 43.9738 44.2148 44.2863 43.9023 44.2863H7.02734C6.71484 44.2863 6.71484 44.2863 6.71484 43.9738V7.09882C6.71484 6.78632 6.71484 6.78632 7.02734 6.78632H43.9023ZM43.9023 3.66132H7.02734C5.15234 3.66132 3.58984 5.22382 3.58984 7.09882V43.9738C3.58984 45.8488 5.15234 47.4113 7.02734 47.4113H43.9023C45.7773 47.4113 47.3398 45.8488 47.3398 43.9738V7.09882C47.3398 5.22382 45.7773 3.66132 43.9023 3.66132Z"
        fill="#132950"
      />
      <path
        d="M21.7148 34.9113L13.2773 26.7863L15.7773 24.5988L21.7148 30.5363L37.0273 15.5363L39.2148 17.7238L21.7148 34.9113Z"
        fill="white"
      />
    </svg>
  );
};
export const Arrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="21"
      viewBox="0 0 24 21"
      fill="none"
    >
      <path
        d="M1.5 10.8931L12 19.8931L22.5 10.8931"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M1.5 1.89307L12 10.8931L22.5 1.89307"
        stroke="black"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
export const Phone = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <g clip-path="url(#clip0_235_638)">
        <path
          d="M4.90541 0.439689C3.41862 0.373796 2.29016 0.953207 1.58031 1.64977C1.22538 1.99805 0.969129 2.37071 0.793756 2.7186C0.618382 3.0665 0.506962 3.35331 0.506962 3.72628C0.506962 3.69306 0.498974 3.86743 0.494184 4.06994C0.489386 4.27244 0.490259 4.54542 0.508381 4.8752C0.544698 5.53477 0.653691 6.42694 0.942831 7.48467C1.52111 9.60012 2.82323 12.3751 5.64795 15.2723C8.47268 18.1695 11.1782 19.5048 13.2409 20.0981C14.2723 20.3947 15.142 20.5063 15.7851 20.5437C16.1067 20.5623 16.3714 20.5631 16.5688 20.5582C16.7663 20.5533 16.9376 20.5451 16.9053 20.5451C17.269 20.5451 17.5486 20.4308 17.8878 20.251C18.227 20.0711 18.5903 19.8083 18.9299 19.4442C19.6091 18.7162 20.174 17.5588 20.1097 16.0339C20.0793 15.3066 19.6856 14.6626 19.1045 14.2806C18.6555 13.9856 17.9585 13.5275 17.0487 12.9308C15.9932 12.2391 14.643 12.1897 13.5419 12.8084L13.6044 12.7764L12.7482 13.1536L12.6858 13.1987C12.4777 13.3486 12.22 13.3763 11.9858 13.2759C11.3299 12.9946 10.308 12.4419 9.35782 11.4673C8.40762 10.4927 7.86873 9.44461 7.59446 8.77193C7.49654 8.53179 7.5236 8.26746 7.66971 8.05403L7.71372 7.98996L8.08144 7.11189L8.05021 7.17596C8.65338 6.04685 8.60648 4.66215 7.93095 3.5792C7.34915 2.6461 6.90253 1.93118 6.61482 1.47066C6.24245 0.874745 5.61451 0.470958 4.90541 0.439689ZM4.84294 1.92936C5.04686 1.93835 5.2574 2.06071 5.39098 2.27447C5.67899 2.73547 6.12582 3.45073 6.7071 4.38301C7.09287 5.00144 7.11999 5.8142 6.77525 6.45952L6.75822 6.49156L6.40753 7.33177L6.47994 7.19635C6.05032 7.82392 5.96398 8.6389 6.25278 9.34712C6.5804 10.1506 7.20692 11.3698 8.3299 12.5216C9.45288 13.6734 10.6416 14.3159 11.425 14.652C12.1155 14.9482 12.9101 14.8596 13.522 14.419L13.39 14.4932L14.2092 14.1336L14.2404 14.1161C14.8693 13.7627 15.6617 13.7921 16.265 14.1874C17.174 14.7836 17.8714 15.2405 18.3208 15.5359C18.5293 15.6729 18.6486 15.8888 18.6573 16.098C18.705 17.2302 18.3216 17.9391 17.8793 18.4133C17.6581 18.6504 17.4183 18.8224 17.2205 18.9273C17.0227 19.0322 16.8335 19.054 16.9053 19.054C16.772 19.054 16.7018 19.063 16.5348 19.0671C16.3677 19.0713 16.1439 19.0715 15.8675 19.0554C15.3147 19.0234 14.5516 18.9266 13.6327 18.6623C11.795 18.1337 9.33142 16.9417 6.67587 14.218C4.02032 11.4944 2.85792 8.96744 2.34273 7.08276C2.08513 6.14043 1.9906 5.35765 1.95939 4.79074C1.94378 4.50729 1.94398 4.27762 1.94803 4.10634C1.9521 3.93506 1.96081 3.86313 1.96081 3.72628C1.96081 3.7999 1.98206 3.60588 2.08433 3.40301C2.18659 3.20014 2.35435 2.95417 2.58551 2.72734C3.04781 2.27369 3.73898 1.88043 4.84294 1.92936Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_235_638">
          <rect
            width="21"
            height="21"
            fill="white"
            transform="translate(0.0307617 0.0507812)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Instagram = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
    >
      <g clip-path="url(#clip0_235_640)">
        <path
          d="M6.74917 0.223145H14.2753C17.8035 0.223145 20.6746 3.14021 20.6746 6.72513V14.3747C20.6746 17.9607 17.8046 20.8789 14.2775 20.8789H6.75137C3.22314 20.8789 0.352051 17.9618 0.352051 14.3769V6.72737C0.352051 3.14131 3.22207 0.223145 6.74917 0.223145ZM6.74917 2.51823C4.46739 2.51823 2.61012 4.40704 2.61012 6.72737V14.3769C2.61012 16.6961 4.46847 18.5838 6.75137 18.5838H14.2775C16.5593 18.5838 18.4166 16.695 18.4166 14.3747V6.72513C18.4166 4.40595 16.5582 2.51823 14.2753 2.51823H6.74917ZM15.7836 4.43005C16.1991 4.43005 16.5356 4.77203 16.5356 5.19433C16.5356 5.61662 16.1991 5.96085 15.7836 5.96085C15.3681 5.96085 15.0295 5.61662 15.0295 5.19433C15.0295 4.77203 15.3681 4.43005 15.7836 4.43005ZM10.5133 4.81331C13.6261 4.81331 16.1585 7.38724 16.1585 10.551C16.1585 13.7148 13.6261 16.2887 10.5133 16.2887C7.4006 16.2887 4.86818 13.7148 4.86818 10.551C4.86818 7.38724 7.4006 4.81331 10.5133 4.81331ZM10.5133 7.10839C9.61503 7.10839 8.75351 7.4711 8.1183 8.11671C7.4831 8.76233 7.12624 9.63797 7.12624 10.551C7.12624 11.4641 7.4831 12.3397 8.1183 12.9853C8.75351 13.6309 9.61503 13.9936 10.5133 13.9936C11.4117 13.9936 12.2732 13.6309 12.9084 12.9853C13.5436 12.3397 13.9004 11.4641 13.9004 10.551C13.9004 9.63797 13.5436 8.76233 12.9084 8.11671C12.2732 7.4711 11.4117 7.10839 10.5133 7.10839Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_235_640">
          <rect
            width="21"
            height="21"
            fill="white"
            transform="translate(0.0307617 0.0439453)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const TikTok = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="21"
      viewBox="0 0 21 21"
      fill="none"
    >
      <g clip-path="url(#clip0_235_642)">
        <path
          d="M17.6395 1.05029H2.58072C1.28331 1.05029 0.227783 2.10582 0.227783 3.40323V18.4621C0.227783 19.7595 1.28331 20.815 2.58072 20.815H17.6395C18.937 20.815 19.9925 19.7595 19.9925 18.4621V3.40323C19.9925 2.10582 18.937 1.05029 17.6395 1.05029ZM15.76 9.67288C15.6532 9.68276 15.545 9.68935 15.4353 9.68935C14.201 9.68935 13.1163 9.05453 12.4852 8.095C12.4852 10.6122 12.4852 13.4762 12.4852 13.5242C12.4852 15.7402 10.6885 17.5369 8.47249 17.5369C6.25649 17.5369 4.45978 15.7402 4.45978 13.5242C4.45978 11.3082 6.25649 9.51147 8.47249 9.51147C8.55625 9.51147 8.63814 9.519 8.72049 9.52418V11.5016C8.63814 11.4917 8.5572 11.4766 8.47249 11.4766C7.3412 11.4766 6.42449 12.3934 6.42449 13.5246C6.42449 14.6559 7.3412 15.5726 8.47249 15.5726C9.60378 15.5726 10.6028 14.6814 10.6028 13.5501C10.6028 13.5054 10.6226 4.32935 10.6226 4.32935H12.5125C12.6904 6.01923 14.0546 7.35288 15.76 7.47523V9.67288Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_235_642">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0.0307617 0.886719)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
export const Search = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="44"
      height="46"
      viewBox="0 0 44 46"
      fill="none"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.5261 8.90627C23.5316 8.90627 28.4 13.9807 28.4 20.2403C28.4 20.762 28.8057 21.1848 29.3061 21.1848C29.8066 21.1848 30.2123 20.762 30.2123 20.2403C30.2123 12.9374 24.5325 7.01726 17.5261 7.01726C10.5194 7.01726 4.83995 12.9374 4.83995 20.2403C4.83995 27.5434 10.5194 33.4635 17.5261 33.4635C20.6672 33.4635 23.5431 32.2725 25.7583 30.3014L37.8545 38.9644C38.267 39.2597 38.8311 39.1508 39.1145 38.7208C39.3979 38.291 39.2933 37.703 38.8808 37.4076L26.1946 28.3221C25.8405 28.0685 25.3641 28.1089 25.054 28.4192C23.0994 30.3743 20.4482 31.5745 17.5261 31.5745C11.5204 31.5745 6.65226 26.5 6.65226 20.2403C6.65226 13.9807 11.5204 8.90627 17.5261 8.90627Z"
        fill="white"
      />
    </svg>
  );
};
