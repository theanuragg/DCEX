import React from 'react';
import { 
  CircleDollarSign,
  Globe, 
  LineChart, 
  Database,
  ArrowUp
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background Lines */}
        <div className="absolute inset-0 z-0 opacity-60">
          {/* Chart Lines */}
          <svg 
            className="w-full h-40 absolute"
            viewBox="0 0 1300 100" 
            preserveAspectRatio="none"
          >
            <path 
              d={`M0,${60 + 20} C100,${20 + 20} 200,${80 + 20} 300,${40 + 20} S400,${90 + 20} 500,${30 + 20} S600,${70 + 20} 700,${50 + 20} S800,${10 + 20} 900,${60 + 20} S1000,${40 + 20} 1100,${30 + 20} S1200,${70 + 20} 1300,${20 + 20}`} 
              className={cn("graph-line fill-none", "stroke-primary/10")} 
              strokeWidth="2"
            />
          </svg>
          <svg 
            className="w-full h-40 absolute top-40"
            viewBox="0 0 1300 100" 
            preserveAspectRatio="none"
          >
            <path 
              d={`M0,${60 - 20} C100,${20 - 20} 200,${80 - 20} 300,${40 - 20} S400,${90 - 20} 500,${30 - 20} S600,${70 - 20} 700,${50 - 20} S800,${10 - 20} 900,${60 - 20} S1000,${40 - 20} 1100,${30 - 20} S1200,${70 - 20} 1300,${20 - 20}`} 
              className={cn("graph-line fill-none", "stroke-crypto-ethereum/10")} 
              strokeWidth="2"
            />
          </svg>
          <svg 
            className="w-full h-40 absolute top-80"
            viewBox="0 0 1300 100" 
            preserveAspectRatio="none"
          >
            <path 
              d={`M0,${60 + 10} C100,${20 + 10} 200,${80 + 10} 300,${40 + 10} S400,${90 + 10} 500,${30 + 10} S600,${70 + 10} 700,${50 + 10} S800,${10 + 10} 900,${60 + 10} S1000,${40 + 10} 1100,${30 + 10} S1200,${70 + 10} 1300,${20 + 10}`} 
              className={cn("graph-line fill-none", "stroke-crypto-polkadot/10")} 
              strokeWidth="2"
            />
          </svg>
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 pt-16 md:pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-6">
            <div className="flex flex-col justify-center">
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4 justify-center">
                  <span className="text-sm">Why choose</span>
                  <span className="text-primary font-semibold">crypgo</span>
                </div>
                
                <h1 className="text-4xl md:text-4xl font-bold mb-8 text-center">
                  Features of the crypto framer mobile application
                </h1>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                  {/* Feature Items */}
                  <div className="feature-item flex items-center">
                    <div className="feature-icon bg-light-success  mr-2  rounded-full">
                      <CircleDollarSign size={18} className='text-primary'/>
                    </div>
                    <div className="font-light">Blockchain Consulting With Your Business</div>
                  </div>
                  <div className="feature-item flex items-center">
                    <div className="feature-icon mr-2 bg-light-sccuess rounded-full ">
                      <Globe size={18}  className='text-primary'/>
                    </div>
                    <div className="font-light">Kickstart your crypto own website today</div>
                  </div>
                  <div className="feature-item flex items-center">
                    <div className="feature-icon mr-2 bg-light-sccuess rounded-full">
                      <LineChart size={18} className='text-primary'/>
                    </div>
                    <div className="font-light">Designed for crypto trading platforms</div>
                  </div>
                  <div className="feature-item flex items-center">
                    <div className="feature-icon mr-2 bg-light-sccuess rounded-full">
                      <Database size={18} className='text-primary'/>
                    </div>
                    <div className="font-light">Launch your blockchain platform today</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center lg:justify-end items-center ">
              {/* Portfolio Card */}
              <div className="w-full max-w-md rounded-lg  bg-dark4/30 opacity-10 p-6 border">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-lg font-medium">Your portfolio is up</div>
                  <div className="text-lg font-bold text-primary">2.31%</div>
                </div>
                
                <div className="space-y-2">
                  {/* Bitcoin */}
                  <div className="crypto-card flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                          <circle cx="12" cy="12" r="12" fill="#F7931A" />
                          <path d="M14.9696 10.18C15.1496 8.82 14.1296 8.1 12.7696 7.62L13.2296 5.68L12.0296 5.38L11.5896 7.26C11.2496 7.18 10.8896 7.1 10.5396 7.02L10.9796 5.14L9.77957 4.84L9.31957 6.78C9.03957 6.72 8.75957 6.64 8.49957 6.58V6.56L6.85957 6.14L6.53957 7.42C6.53957 7.42 7.45957 7.64 7.43957 7.66C7.95957 7.8 8.05957 8.14 8.03957 8.42L7.51957 10.66C7.55957 10.68 7.61957 10.7 7.67957 10.72L7.51957 10.68L6.77957 13.78C6.69957 13.94 6.51957 14.18 6.15957 14.08C6.15957 14.1 5.25957 13.84 5.25957 13.84L4.53957 15.24L6.07957 15.64C6.37957 15.72 6.67957 15.8 6.97957 15.88L6.51957 17.82L7.71957 18.12L8.17957 16.18C8.53957 16.28 8.87957 16.36 9.21957 16.44L8.75957 18.38L9.95957 18.68L10.4196 16.74C12.2796 17.08 13.6996 16.94 14.3596 15.28C14.8996 13.9 14.3796 13.1 13.2996 12.58C14.0596 12.42 14.6196 11.92 14.7796 10.82L14.9696 10.18ZM11.9596 14.56C11.5596 15.9 9.25957 15.1 8.49957 14.9L9.09957 12.3C9.85957 12.5 12.3796 13.14 11.9596 14.56ZM12.3596 10.8C11.9996 12.02 10.0596 11.34 9.43957 11.16L9.97957 8.8C10.5996 8.98 12.7396 9.52 12.3596 10.8Z" fill="white" />
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">Bitcoin</span>
                        <span className="text-xs text-muted-foreground">BTC/USD</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      <span>2.20%</span>
                      <ArrowUp size={16} />
                    </div>
                  </div>
                  
                  {/* Ethereum */}
                  <div className="crypto-card flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                          <circle cx="12" cy="12" r="12" fill="#627EEA" />
                          <path d="M11.9977 4.5L11.8789 4.89727V14.8431L11.9977 14.9616L16.4927 12.2186L11.9977 4.5Z" fill="white" fillOpacity="0.6"/>
                          <path d="M11.9977 4.5L7.50269 12.2186L11.9977 14.9616V10.089V4.5Z" fill="white"/>
                          <path d="M11.9977 15.9201L11.9312 16.0008V19.3945L11.9977 19.5893L16.4966 13.1787L11.9977 15.9201Z" fill="white" fillOpacity="0.6"/>
                          <path d="M11.9977 19.5893V15.9201L7.50269 13.1787L11.9977 19.5893Z" fill="white"/>
                          <path d="M11.9977 14.9616L16.4927 12.2186L11.9977 10.089V14.9616Z" fill="white" fillOpacity="0.2"/>
                          <path d="M7.50269 12.2186L11.9977 14.9616V10.089L7.50269 12.2186Z" fill="white" fillOpacity="0.6"/>
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">Ethereum</span>
                        <span className="text-xs text-muted-foreground">ETH/USD</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      <span>1.50%</span>
                      <ArrowUp size={16} />
                    </div>
                  </div>
                  
                  {/* Litecoin */}
                  <div className="crypto-card flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                          <circle cx="12" cy="12" r="12" fill="#BFBBBB" />
                          <path d="M12.5046 5.25L9.16003 15.2069L6.99744 14.389L6.66089 15.5085L8.54635 16.2372L7.5 19.5H17.25L18 16.5H11.595L12.3766 14.0981L14.6768 14.9633L15.0123 13.8438L12.9758 13.0731L15.9726 5.25H12.5046Z" fill="white"/>
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">Litecoin</span>
                        <span className="text-xs text-muted-foreground">LTC/USD</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      <span>3.05%</span>
                      <ArrowUp size={16} />
                    </div>
                  </div>
                  
                  {/* Polkadot */}
                  <div className="crypto-card flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full">
                        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
                          <circle cx="12" cy="12" r="12" fill="#E6007A" />
                          <path d="M12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6Z" fill="white"/>
                          <path d="M12 14C13.1046 14 14 14.8954 14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14Z" fill="white"/>
                          <path d="M16 10C17.1046 10 18 10.8954 18 12C18 13.1046 17.1046 14 16 14C14.8954 14 14 13.1046 14 12C14 10.8954 14.8954 10 16 10Z" fill="white"/>
                          <path d="M8 10C9.10457 10 10 10.8954 10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12C6 10.8954 6.89543 10 8 10Z" fill="white"/>
                        </svg>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium">Polkadot</span>
                        <span className="text-xs text-muted-foreground">DOT/USD</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-primary">
                      <span>2.80%</span>
                      <ArrowUp size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>   
      </div>
    </div>
  );
};

export default Index;
