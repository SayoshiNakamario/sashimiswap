export const getEthChainInfo = () => {
    let chainId: number = 10000;
    let rpcUrl: string = 'https://smartbch.greyh.at';
    let ethscanType: string = 'kovan.';
    const href = window.location.href;
    // if (/\/\/[sushi|sashimi|]+.aelf.io|\/\/sashimi.cool/.test(href)) {
        chainId = 10000;
        rpcUrl = 'https://smartbch.greyh.at';
        ethscanType = '';
    // }
    return {
        chainId,
        rpcUrl,
        ethscanType
    }
};
