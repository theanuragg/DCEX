// 'use client'

// import React, { useState, useEffect } from "react";

// import { 
//   ArrowDownUp, 
//   Settings, 
//   Info, 
//   ChevronDown,
//   RefreshCw,
//   LineChart,
//   Clock,
//   ArrowDown
// } from "lucide-react";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import GlassMorphism from "@/components/ui/GlassMorphism";
// import FadeInSection from "@/components/ui/FadeInSection";
// import { 
//   Dialog, 
//   DialogContent, 
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger 
// } from "@/components/ui/dialog";
// import { cn } from "@/lib/utils";
// import { useToast } from "@/components/ui/use-toast";

// const cryptoAssets = [
//   { symbol: "BTC", name: "Bitcoin", balance: 0.3429, price: 34521.67, change24h: 2.45 },
//   { symbol: "ETH", name: "Ethereum", balance: 4.5641, price: 1845.32, change24h: 1.23 },
//   { symbol: "SOL", name: "Solana", balance: 45.7631, price: 103.45, change24h: 5.67 },
//   { symbol: "USDT", name: "Tether", balance: 12450.32, price: 1.00, change24h: 0.01 },
//   { symbol: "ADA", name: "Cardano", balance: 3482.54, price: 0.54, change24h: -1.12 },
//   { symbol: "BNB", name: "Binance Coin", balance: 3.1254, price: 312.67, change24h: 1.87 },
// ];

// type TokenSelectorProps = {
//   selected: string;
//   onSelect: (symbol: string) => void;
//   excludeSymbol?: string;
// }

// const TokenSelector: React.FC<TokenSelectorProps> = ({ selected, onSelect, excludeSymbol }) => {
//   const [searchTerm, setSearchTerm] = useState("");
  
//   const filteredAssets = cryptoAssets
//     .filter(asset => asset.symbol !== excludeSymbol)
//     .filter(asset => 
//       asset.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
//       asset.symbol.toLowerCase().includes(searchTerm.toLowerCase())
//     );
  
//   return (
//     <DialogContent className="sm:max-w-md">
//       <DialogHeader>
//         <DialogTitle>Select Token</DialogTitle>
//       </DialogHeader>
//       <div className="p-2">
//         <Input 
//           placeholder="Search name or paste address"
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="mb-4"
//         />
//         <div className="max-h-[300px] overflow-y-auto">
//           {filteredAssets.map((asset) => (
//             <div 
//               key={asset.symbol}
//               className={cn(
//                 "flex items-center p-3 rounded-lg hover:bg-secondary/50 cursor-pointer",
//                 selected === asset.symbol && "bg-secondary/30"
//               )}
//               onClick={() => {
//                 onSelect(asset.symbol);
//               }}
//             >
//               <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
//                 {asset.symbol.charAt(0)}
//               </div>
//               <div className="flex-grow">
//                 <div className="font-medium">{asset.name}</div>
//                 <div className="text-sm text-muted-foreground">{asset.symbol}</div>
//               </div>
//               <div className="text-right">
//                 <div className="font-medium">{asset.balance}</div>
//                 <div className={cn(
//                   "text-xs",
//                   asset.change24h >= 0 ? "text-green-500" : "text-red-500"
//                 )}>
//                   {asset.change24h >= 0 ? "+" : ""}{asset.change24h}%
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </DialogContent>
//   );
// };

// const Swap = () => {
//   const [fromToken, setFromToken] = useState("BTC");
//   const [toToken, setToToken] = useState("USDT");
//   const [fromAmount, setFromAmount] = useState("");
//   const [toAmount, setToAmount] = useState("");
//   const [slippage, setSlippage] = useState(0.5); // Default slippage tolerance 0.5%
//   const [showSettings, setShowSettings] = useState(false);
//   const { toast } = useToast();

//   // Get asset info
//   const fromAsset = cryptoAssets.find(asset => asset.symbol === fromToken);
//   const toAsset = cryptoAssets.find(asset => asset.symbol === toToken);
  
//   // Calculate rates
//   const exchangeRate = fromAsset && toAsset ? toAsset.price / fromAsset.price : 0;
  
//   useEffect(() => {
//     if (fromAmount && !isNaN(parseFloat(fromAmount))) {
//       const calculatedAmount = (parseFloat(fromAmount) * exchangeRate).toFixed(6);
//       setToAmount(calculatedAmount);
//     } else {
//       setToAmount("");
//     }
//   }, [fromAmount, fromToken, toToken, exchangeRate]);

//   const handleSwapPositions = () => {
//     setFromToken(toToken);
//     setToToken(fromToken);
//     setFromAmount(toAmount);
//     setToAmount(fromAmount);
//   };

//   const handleMaxAmount = () => {
//     if (fromAsset) {
//       setFromAmount(fromAsset.balance.toString());
//     }
//   };

//   const handleSwap = () => {
//     if (!fromAmount || parseFloat(fromAmount) <= 0) {
//       toast({
//         title: "Invalid amount",
//         description: "Please enter a valid amount to swap",
//         variant: "destructive"
//       });
//       return;
//     }

//     if (parseFloat(fromAmount) > (fromAsset?.balance || 0)) {
//       toast({
//         title: "Insufficient balance",
//         description: `You don't have enough ${fromToken}`,
//         variant: "destructive"
//       });
//       return;
//     }

//     toast({
//       title: "Swap successful!",
//       description: `Swapped ${fromAmount} ${fromToken} to ${toAmount} ${toToken}`,
//       variant: "default"
//     });
    
//     // Reset form
//     setFromAmount("");
//     setToAmount("");
//   };

//   return (      
//       <main className="flex-grow pt-24 pb-12">
//         <div className="container px-4 mx-auto">
//           <FadeInSection>
//             <div className="max-w-xl mx-auto">
//               <h1 className="text-3xl font-bold mb-8">Swap</h1>
              
//               <GlassMorphism className="p-6 rounded-xl">
//                 {/* Swap Form Header */}
//                 <div className="flex justify-between items-center mb-4">
//                   <div className="text-lg font-medium">Swap</div>
//                   <div className="flex gap-2">
//                     <Button 
//                       variant="ghost" 
//                       size="icon" 
//                       className="rounded-full"
//                       onClick={() => setShowSettings(!showSettings)}
//                     >
//                       <Settings className="h-4 w-4" />
//                     </Button>
//                     <Button variant="ghost" size="icon" className="rounded-full">
//                       <RefreshCw className="h-4 w-4" />
//                     </Button>
//                     <Button variant="ghost" size="icon" className="rounded-full">
//                       <LineChart className="h-4 w-4" />
//                     </Button>
//                     <Button variant="ghost" size="icon" className="rounded-full">
//                       <Clock className="h-4 w-4" />
//                     </Button>
//                   </div>
//                 </div>
                
//                 {/* Settings Panel (conditionally rendered) */}
//                 {showSettings && (
//                   <div className="mb-4 p-4 bg-secondary/30 rounded-lg">
//                     <div className="text-sm font-medium mb-2">Transaction Settings</div>
//                     <div className="flex flex-col space-y-3">
//                       <div>
//                         <div className="text-xs text-muted-foreground mb-1">Slippage Tolerance</div>
//                         <div className="flex gap-2">
//                           <Button 
//                             variant={slippage === 0.1 ? "secondary" : "outline"}
//                             size="sm"
//                             className="text-xs h-8"
//                             onClick={() => setSlippage(0.1)}
//                           >
//                             0.1%
//                           </Button>
//                           <Button 
//                             variant={slippage === 0.5 ? "secondary" : "outline"}
//                             size="sm" 
//                             className="text-xs h-8"
//                             onClick={() => setSlippage(0.5)}
//                           >
//                             0.5%
//                           </Button>
//                           <Button 
//                             variant={slippage === 1.0 ? "secondary" : "outline"}
//                             size="sm" 
//                             className="text-xs h-8"
//                             onClick={() => setSlippage(1.0)}
//                           >
//                             1.0%
//                           </Button>
//                           <div className="relative flex-grow">
//                             <Input 
//                               type="number"
//                               value={slippage}
//                               onChange={(e) => setSlippage(parseFloat(e.target.value) || 0)}
//                               className="h-8 pr-8 text-xs"
//                             />
//                             <div className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-muted-foreground">%</div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
                
//                 {/* From Token Input */}
//                 <div className="bg-secondary/30 rounded-lg p-4 mb-2">
//                   <div className="flex justify-between text-sm text-muted-foreground mb-2">
//                     <span>From</span>
//                     <span>Balance: {fromAsset?.balance || 0} {fromToken}</span>
//                   </div>
//                   <div className="flex gap-2">
//                     <Input 
//                       type="number"
//                       placeholder="0.00"
//                       value={fromAmount}
//                       onChange={(e) => setFromAmount(e.target.value)}
//                       className="flex-grow text-lg"
//                     />
//                     <Dialog>
//                       <DialogTrigger asChild>
//                         <Button variant="outline" className="min-w-[120px]">
//                           <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
//                             {fromToken.charAt(0)}
//                           </div>
//                           <span className="mr-1">{fromToken}</span>
//                           <ChevronDown className="h-4 w-4" />
//                         </Button>
//                       </DialogTrigger>
//                       <TokenSelector 
//                         selected={fromToken}
//                         onSelect={setFromToken}
//                         excludeSymbol={toToken}
//                       />
//                     </Dialog>
//                   </div>
//                   <div className="flex justify-end mt-2">
//                     <button 
//                       className="text-xs text-primary hover:underline"
//                       onClick={handleMaxAmount}
//                     >
//                       MAX
//                     </button>
//                   </div>
//                 </div>
                
//                 {/* Swap Button */}
//                 <div className="flex justify-center -my-2 relative z-10">
//                   <Button 
//                     variant="outline" 
//                     size="icon" 
//                     className="rounded-full bg-background h-9 w-9 border-2"
//                     onClick={handleSwapPositions}
//                   >
//                     <ArrowDownUp className="h-4 w-4" />
//                   </Button>
//                 </div>
                
//                 {/* To Token Input */}
//                 <div className="bg-secondary/30 rounded-lg p-4 mt-2">
//                   <div className="flex justify-between text-sm text-muted-foreground mb-2">
//                     <span>To</span>
//                     <span>Balance: {toAsset?.balance || 0} {toToken}</span>
//                   </div>
//                   <div className="flex gap-2">
//                     <Input 
//                       type="number"
//                       placeholder="0.00"
//                       value={toAmount}
//                       readOnly
//                       className="flex-grow text-lg bg-secondary/50"
//                     />
//                     <Dialog>
//                       <DialogTrigger asChild>
//                         <Button variant="outline" className="min-w-[120px]">
//                           <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mr-2">
//                             {toToken.charAt(0)}
//                           </div>
//                           <span className="mr-1">{toToken}</span>
//                           <ChevronDown className="h-4 w-4" />
//                         </Button>
//                       </DialogTrigger>
//                       <TokenSelector 
//                         selected={toToken}
//                         onSelect={setToToken}
//                         excludeSymbol={fromToken}
//                       />
//                     </Dialog>
//                   </div>
//                 </div>
                
//                 {/* Exchange Rate */}
//                 <div className="mt-4 text-sm text-muted-foreground p-2">
//                   <div className="flex justify-between items-center">
//                     <span>Exchange Rate</span>
//                     <span>1 {fromToken} = {exchangeRate.toFixed(6)} {toToken}</span>
//                   </div>
//                   <div className="flex justify-between items-center mt-2">
//                     <span>Price Impact</span>
//                     <span className="text-green-500">{"< 0.01%"}</span>
//                   </div>
//                   <div className="flex justify-between items-center mt-2">
//                     <div className="flex items-center">
//                       <span>Minimum received</span>
//                       <Info className="h-3 w-3 ml-1" />
//                     </div>
//                     <span>{(parseFloat(toAmount || "0") * (1 - slippage / 100)).toFixed(6)} {toToken}</span>
//                   </div>
//                 </div>
                
//                 {/* Swap Button */}
//                 <Button 
//                   className="w-full mt-4 py-6 text-lg"
//                   onClick={handleSwap}
//                   disabled={!fromAmount || parseFloat(fromAmount) <= 0}
//                 >
//                   {!fromAmount || parseFloat(fromAmount) <= 0
//                     ? "Enter an amount"
//                     : parseFloat(fromAmount) > (fromAsset?.balance || 0)
//                       ? `Insufficient ${fromToken} balance`
//                       : `Swap ${fromToken} for ${toToken}`}
//                 </Button>
//               </GlassMorphism>
              
//               {/* Additional Information */}
//               <div className="mt-8 text-center text-sm text-muted-foreground">
//                 <p>Fast and secure token swaps with minimal slippage</p>
//                 <p className="mt-2">Powered by advanced routing and liquidity pools</p>
//               </div>
//             </div>
//           </FadeInSection>
//         </div>
//     </div>
//   );
// };

// export default Swap;