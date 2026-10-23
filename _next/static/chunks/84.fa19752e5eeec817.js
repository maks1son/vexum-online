"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[84],{948:(e,t,r)=>{r.d(t,{F:()=>l,o:()=>s});var i=r(4910);class s{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}let a=new i.qUd(-1,1,1,-1,0,1);class o extends i.LoY{constructor(){super(),this.setAttribute("position",new i.qtW([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new i.qtW([0,2,0,0,2,0],2))}}let n=new o;class l{constructor(e){this._mesh=new i.eaF(n,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,a)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}},2370:(e,t,r)=>{r.d(t,{Z:()=>i});let i={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`}},2486:(e,t,r)=>{r.d(t,{C:()=>u});var i=r(4910),s=r(948);class a{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(256*e.random());this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[255&e];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,t){let r,i,s,a,o,n=.5*(Math.sqrt(3)-1)*(e+t),l=Math.floor(e+n),h=Math.floor(t+n),u=(3-Math.sqrt(3))/6,d=(l+h)*u,c=e-(l-d),f=t-(h-d);c>f?(a=1,o=0):(a=0,o=1);let m=c-a+u,p=f-o+u,g=c-1+2*u,v=f-1+2*u,x=255&l,_=255&h,M=this.perm[x+this.perm[_]]%12,b=this.perm[x+a+this.perm[_+o]]%12,T=this.perm[x+1+this.perm[_+1]]%12,w=.5-c*c-f*f;w<0?r=0:(w*=w,r=w*w*this._dot(this.grad3[M],c,f));let C=.5-m*m-p*p;C<0?i=0:(C*=C,i=C*C*this._dot(this.grad3[b],m,p));let S=.5-g*g-v*v;return S<0?s=0:(S*=S,s=S*S*this._dot(this.grad3[T],g,v)),70*(r+i+s)}noise3d(e,t,r){let i,s,a,o,n,l,h,u,d,c,f=1/3*(e+t+r),m=Math.floor(e+f),p=Math.floor(t+f),g=Math.floor(r+f),v=1/6*(m+p+g),x=e-(m-v),_=t-(p-v),M=r-(g-v);x>=_?_>=M?(n=1,l=0,h=0,u=1,d=1,c=0):(x>=M?(n=1,l=0,h=0):(n=0,l=0,h=1),u=1,d=0,c=1):_<M?(n=0,l=0,h=1,u=0,d=1,c=1):x<M?(n=0,l=1,h=0,u=0,d=1,c=1):(n=0,l=1,h=0,u=1,d=1,c=0);let b=x-n+1/6,T=_-l+1/6,w=M-h+1/6,C=x-u+1/6*2,S=_-d+1/6*2,P=M-c+1/6*2,R=x-1+1/6*3,E=_-1+1/6*3,y=M-1+1/6*3,A=255&m,D=255&p,N=255&g,F=this.perm[A+this.perm[D+this.perm[N]]]%12,k=this.perm[A+n+this.perm[D+l+this.perm[N+h]]]%12,U=this.perm[A+u+this.perm[D+d+this.perm[N+c]]]%12,I=this.perm[A+1+this.perm[D+1+this.perm[N+1]]]%12,O=.6-x*x-_*_-M*M;O<0?i=0:(O*=O,i=O*O*this._dot3(this.grad3[F],x,_,M));let B=.6-b*b-T*T-w*w;B<0?s=0:(B*=B,s=B*B*this._dot3(this.grad3[k],b,T,w));let z=.6-C*C-S*S-P*P;z<0?a=0:(z*=z,a=z*z*this._dot3(this.grad3[U],C,S,P));let L=.6-R*R-E*E-y*y;return L<0?o=0:(L*=L,o=L*L*this._dot3(this.grad3[I],R,E,y)),32*(i+s+a+o)}noise4d(e,t,r,i){let s,a,o,n,l,h=this.grad4,u=this.simplex,d=this.perm,c=(5-Math.sqrt(5))/20,f=(Math.sqrt(5)-1)/4*(e+t+r+i),m=Math.floor(e+f),p=Math.floor(t+f),g=Math.floor(r+f),v=Math.floor(i+f),x=(m+p+g+v)*c,_=e-(m-x),M=t-(p-x),b=r-(g-x),T=i-(v-x),w=32*(_>M)+16*(_>b)+8*(M>b)+4*(_>T)+2*(M>T)+ +(b>T),C=+(u[w][0]>=3),S=+(u[w][1]>=3),P=+(u[w][2]>=3),R=+(u[w][3]>=3),E=+(u[w][0]>=2),y=+(u[w][1]>=2),A=+(u[w][2]>=2),D=+(u[w][3]>=2),N=+(u[w][0]>=1),F=+(u[w][1]>=1),k=+(u[w][2]>=1),U=+(u[w][3]>=1),I=_-C+c,O=M-S+c,B=b-P+c,z=T-R+c,L=_-E+2*c,G=M-y+2*c,j=b-A+2*c,Z=T-D+2*c,V=_-N+3*c,H=M-F+3*c,K=b-k+3*c,Q=T-U+3*c,q=_-1+4*c,X=M-1+4*c,W=b-1+4*c,Y=T-1+4*c,J=255&m,$=255&p,ee=255&g,et=255&v,er=d[J+d[$+d[ee+d[et]]]]%32,ei=d[J+C+d[$+S+d[ee+P+d[et+R]]]]%32,es=d[J+E+d[$+y+d[ee+A+d[et+D]]]]%32,ea=d[J+N+d[$+F+d[ee+k+d[et+U]]]]%32,eo=d[J+1+d[$+1+d[ee+1+d[et+1]]]]%32,en=.6-_*_-M*M-b*b-T*T;en<0?s=0:(en*=en,s=en*en*this._dot4(h[er],_,M,b,T));let el=.6-I*I-O*O-B*B-z*z;el<0?a=0:(el*=el,a=el*el*this._dot4(h[ei],I,O,B,z));let eh=.6-L*L-G*G-j*j-Z*Z;eh<0?o=0:(eh*=eh,o=eh*eh*this._dot4(h[es],L,G,j,Z));let eu=.6-V*V-H*H-K*K-Q*Q;eu<0?n=0:(eu*=eu,n=eu*eu*this._dot4(h[ea],V,H,K,Q));let ed=.6-q*q-X*X-W*W-Y*Y;return ed<0?l=0:(ed*=ed,l=ed*ed*this._dot4(h[eo],q,X,W,Y)),27*(s+a+o+n+l)}_dot(e,t,r){return e[0]*t+e[1]*r}_dot3(e,t,r,i){return e[0]*t+e[1]*r+e[2]*i}_dot4(e,t,r,i,s){return e[0]*t+e[1]*r+e[2]*i+e[3]*s}}let o={name:"SSAOShader",defines:{PERSPECTIVE_CAMERA:1,KERNEL_SIZE:32},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},kernel:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new i.I9Y},cameraProjectionMatrix:{value:new i.kn4},cameraInverseProjectionMatrix:{value:new i.kn4},kernelRadius:{value:8},minDistance:{value:.005},maxDistance:{value:.05}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;

		uniform vec3 kernel[ KERNEL_SIZE ];

		uniform vec2 resolution;

		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;

		uniform float kernelRadius;
		uniform float minDistance; // avoid artifacts caused by neighbour fragments with minimal depth difference
		uniform float maxDistance; // avoid the influence of fragments which are too far away

		varying vec2 vUv;

		#include <packing>

		#ifdef USE_REVERSED_DEPTH_BUFFER

			const float depthThreshold = 0.0;

		#else

			const float depthThreshold = 1.0;

		#endif

		float getDepth( const in vec2 screenPosition ) {

			return texture2D( tDepth, screenPosition ).x;

		}

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		float getViewZ( const in float depth ) {

			#if PERSPECTIVE_CAMERA == 1

				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );

			#else

				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );

			#endif

		}

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth, const in float viewZ ) {

			float clipW = cameraProjectionMatrix[2][3] * viewZ + cameraProjectionMatrix[3][3];

			vec4 clipPosition = vec4( ( vec3( screenPosition, depth ) - 0.5 ) * 2.0, 1.0 );

			clipPosition *= clipW; // unprojection.

			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;

		}

		vec3 getViewNormal( const in vec2 screenPosition ) {

			return unpackRGBToNormal( texture2D( tNormal, screenPosition ).xyz );

		}

		void main() {

			float depth = getDepth( vUv );

			if ( depth == depthThreshold ) {

				gl_FragColor = vec4( 1.0 ); // don't influence background

			} else {

				float viewZ = getViewZ( depth );

				vec3 viewPosition = getViewPosition( vUv, depth, viewZ );
				vec3 viewNormal = getViewNormal( vUv );

				vec2 noiseScale = vec2( resolution.x / 4.0, resolution.y / 4.0 );
				vec3 random = vec3( texture2D( tNoise, vUv * noiseScale ).r );

				// compute matrix used to reorient a kernel vector

				vec3 tangent = normalize( random - viewNormal * dot( random, viewNormal ) );
				vec3 bitangent = cross( viewNormal, tangent );
				mat3 kernelMatrix = mat3( tangent, bitangent, viewNormal );

				float occlusion = 0.0;

				for ( int i = 0; i < KERNEL_SIZE; i ++ ) {

					vec3 sampleVector = kernelMatrix * kernel[ i ]; // reorient sample vector in view space
					vec3 samplePoint = viewPosition + ( sampleVector * kernelRadius ); // calculate sample point

					vec4 samplePointNDC = cameraProjectionMatrix * vec4( samplePoint, 1.0 ); // project point and calculate NDC
					samplePointNDC /= samplePointNDC.w;

					vec2 samplePointUv = samplePointNDC.xy * 0.5 + 0.5; // compute uv coordinates

					float realDepth = getLinearDepth( samplePointUv ); // get linear depth from depth texture
					float sampleDepth = viewZToOrthographicDepth( samplePoint.z, cameraNear, cameraFar ); // compute linear depth of the sample view Z value
					float delta = sampleDepth - realDepth;

					if ( delta > minDistance && delta < maxDistance ) { // if fragment is before sample point, increase occlusion

						occlusion += 1.0;

					}

				}

				occlusion = clamp( occlusion / float( KERNEL_SIZE ), 0.0, 1.0 );

				gl_FragColor = vec4( vec3( 1.0 - occlusion ), 1.0 );

			}

		}`},n={name:"SSAODepthShader",defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, screenPosition ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},l={name:"SSAOBlurShader",uniforms:{tDiffuse:{value:null},resolution:{value:new i.I9Y}},vertexShader:`varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`uniform sampler2D tDiffuse;

		uniform vec2 resolution;

		varying vec2 vUv;

		void main() {

			vec2 texelSize = ( 1.0 / resolution );
			float result = 0.0;

			for ( int i = - 2; i <= 2; i ++ ) {

				for ( int j = - 2; j <= 2; j ++ ) {

					vec2 offset = ( vec2( float( i ), float( j ) ) ) * texelSize;
					result += texture2D( tDiffuse, vUv + offset ).r;

				}

			}

			gl_FragColor = vec4( vec3( result / ( 5.0 * 5.0 ) ), 1.0 );

		}`};var h=r(2370);class u extends s.o{constructor(e,t,r=512,a=512,u=32){super(),this.width=r,this.height=a,this.clear=!0,this.needsSwap=!1,this.camera=t,this.scene=e,this.kernelRadius=8,this.kernel=[],this.noiseTexture=null,this.output=0,this.minDistance=.005,this.maxDistance=.1,this._visibilityCache=[],this._generateSampleKernel(u),this._generateRandomKernelRotations();const d=new i.VCu;d.format=i.dcC,d.type=i.V3x,this.normalRenderTarget=new i.nWS(this.width,this.height,{minFilter:i.hxR,magFilter:i.hxR,type:i.ix0,depthTexture:d}),this.ssaoRenderTarget=new i.nWS(this.width,this.height,{type:i.ix0,depthBuffer:!1}),this.blurRenderTarget=this.ssaoRenderTarget.clone(),this.ssaoMaterial=new i.BKk({defines:Object.assign({},o.defines),uniforms:i.LlO.clone(o.uniforms),vertexShader:o.vertexShader,fragmentShader:o.fragmentShader,blending:i.XIg}),this.ssaoMaterial.defines.KERNEL_SIZE=u,this.ssaoMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssaoMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.ssaoMaterial.uniforms.tNoise.value=this.noiseTexture,this.ssaoMaterial.uniforms.kernel.value=this.kernel,this.ssaoMaterial.uniforms.cameraNear.value=this.camera.near,this.ssaoMaterial.uniforms.cameraFar.value=this.camera.far,this.ssaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new i.qBx,this.normalMaterial.blending=i.XIg,this.blurMaterial=new i.BKk({defines:Object.assign({},l.defines),uniforms:i.LlO.clone(l.uniforms),vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new i.BKk({defines:Object.assign({},n.defines),uniforms:i.LlO.clone(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,blending:i.XIg}),this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new i.BKk({uniforms:i.LlO.clone(h.Z.uniforms),vertexShader:h.Z.vertexShader,fragmentShader:h.Z.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:i.wn6,blendDst:i.ojh,blendEquation:i.gO9,blendSrcAlpha:i.hdd,blendDstAlpha:i.ojh,blendEquationAlpha:i.gO9}),this._fsQuad=new s.F(null),this._originalClearColor=new i.Q1f}dispose(){this.normalRenderTarget.dispose(),this.ssaoRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.normalMaterial.dispose(),this.blurMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}render(e,t,r){switch(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility(),this.ssaoMaterial.uniforms.kernelRadius.value=this.kernelRadius,this.ssaoMaterial.uniforms.minDistance.value=this.minDistance,this.ssaoMaterial.uniforms.maxDistance.value=this.maxDistance,this._renderPass(e,this.ssaoMaterial,this.ssaoRenderTarget),this._renderPass(e,this.blurMaterial,this.blurRenderTarget),this.output){case u.OUTPUT.SSAO:this.copyMaterial.uniforms.tDiffuse.value=this.ssaoRenderTarget.texture,this.copyMaterial.blending=i.XIg,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:r);break;case u.OUTPUT.Blur:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=i.XIg,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:r);break;case u.OUTPUT.Depth:this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:r);break;case u.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=i.XIg,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:r);break;case u.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.copyMaterial.blending=i.bCz,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:r);break;default:console.warn("THREE.SSAOPass: Unknown output type.")}}setSize(e,t){this.width=e,this.height=t,this.ssaoRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.ssaoMaterial.uniforms.resolution.value.set(e,t),this.ssaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssaoMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t)}_renderPass(e,t,r,i,s){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(r),e.autoClear=!1,null!=i&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this._fsQuad.material=t,this._fsQuad.render(e),e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_renderOverride(e,t,r,i,s){e.getClearColor(this._originalClearColor);let a=e.getClearAlpha(),o=e.autoClear;e.setRenderTarget(r),e.autoClear=!1,i=t.clearColor||i,s=t.clearAlpha||s,null!=i&&(e.setClearColor(i),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=o,e.setClearColor(this._originalClearColor),e.setClearAlpha(a)}_generateSampleKernel(e){let t=this.kernel;for(let r=0;r<e;r++){let s=new i.Pq0;s.x=2*Math.random()-1,s.y=2*Math.random()-1,s.z=Math.random(),s.normalize();let a=r/e;a=i.cj9.lerp(.1,1,a*a),s.multiplyScalar(a),t.push(s)}}_generateRandomKernelRotations(){let e=new a,t=new Float32Array(16);for(let r=0;r<16;r++){let i=2*Math.random()-1,s=2*Math.random()-1;t[r]=e.noise3d(i,s,0)}this.noiseTexture=new i.GYF(t,4,4,i.VT0,i.RQf),this.noiseTexture.wrapS=i.GJx,this.noiseTexture.wrapT=i.GJx,this.noiseTexture.needsUpdate=!0}_overrideVisibility(){let e=this.scene,t=this._visibilityCache;e.traverse(function(e){(e.isPoints||e.isLine||e.isLine2)&&e.visible&&(e.visible=!1,t.push(e))})}_restoreVisibility(){let e=this._visibilityCache;for(let t=0;t<e.length;t++)e[t].visible=!0;e.length=0}}u.OUTPUT={Default:0,SSAO:1,Blur:2,Depth:3,Normal:4}},3962:(e,t,r)=>{r.d(t,{pP:()=>s});var i=r(4910);function s(e,t=!1){let r=null!==e[0].index,o=new Set(Object.keys(e[0].attributes)),n=new Set(Object.keys(e[0].morphAttributes)),l={},h={},u=e[0].morphTargetsRelative,d=new i.LoY,c=0;for(let i=0;i<e.length;++i){let s=e[i],a=0;if(r!==(null!==s.index))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+i+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let e in s.attributes){if(!o.has(e))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+i+'. All geometries must have compatible attributes; make sure "'+e+'" attribute exists among all geometries, or in none of them.'),null;void 0===l[e]&&(l[e]=[]),l[e].push(s.attributes[e]),a++}if(a!==o.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+i+". Make sure all geometries have the same number of attributes."),null;if(u!==s.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+i+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let e in s.morphAttributes){if(!n.has(e))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+i+".  .morphAttributes must be consistent throughout all geometries."),null;void 0===h[e]&&(h[e]=[]),h[e].push(s.morphAttributes[e])}if(t){let e;if(r)e=s.index.count;else{if(void 0===s.attributes.position)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+i+". The geometry must have either an index or a position attribute"),null;e=s.attributes.position.count}d.addGroup(c,e,i),c+=e}}if(r){let t=0,r=[];for(let i=0;i<e.length;++i){let s=e[i].index;for(let e=0;e<s.count;++e)r.push(s.getX(e)+t);t+=e[i].attributes.position.count}d.setIndex(r)}for(let e in l){let t=a(l[e]);if(!t)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+e+" attribute."),null;d.setAttribute(e,t)}for(let e in h){let t=h[e][0].length;if(0!==t){d.morphAttributes=d.morphAttributes||{},d.morphAttributes[e]=[];for(let r=0;r<t;++r){let t=[];for(let i=0;i<h[e].length;++i)t.push(h[e][i][r]);let i=a(t);if(!i)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+e+" morphAttribute."),null;d.morphAttributes[e].push(i)}}}return d}function a(e){let t,r,s,a=-1,o=0;for(let i=0;i<e.length;++i){let n=e[i];if(void 0===t&&(t=n.array.constructor),t!==n.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(void 0===r&&(r=n.itemSize),r!==n.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(void 0===s&&(s=n.normalized),s!==n.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(-1===a&&(a=n.gpuType),a!==n.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;o+=n.count*r}let n=new t(o),l=new i.THS(n,r,s),h=0;for(let t=0;t<e.length;++t){let i=e[t];if(i.isInterleavedBufferAttribute){let e=h/r;for(let t=0,s=i.count;t<s;t++)for(let s=0;s<r;s++){let r=i.getComponent(t,s);l.setComponent(t+e,s,r)}}else n.set(i.array,h);h+=i.count*r}return void 0!==a&&(l.gpuType=a),l}},6992:(e,t,r)=>{r.d(t,{l:()=>s});var i=r(4910);class s extends i.Z58{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;const e=new i.iNn;e.deleteAttribute("uv");const t=new i._4j({side:i.hsX}),r=new i._4j,s=new i.HiM(0xffffff,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const o=new i.eaF(e,t);o.position.set(-.757,13.219,.717),o.scale.set(31.713,28.305,28.591),this.add(o);const n=new i.ZLX(e,r,6),l=new i.B69;l.position.set(-10.906,2.009,1.846),l.rotation.set(0,-.195,0),l.scale.set(2.328,7.905,4.651),l.updateMatrix(),n.setMatrixAt(0,l.matrix),l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),l.updateMatrix(),n.setMatrixAt(1,l.matrix),l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),l.updateMatrix(),n.setMatrixAt(2,l.matrix),l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),l.updateMatrix(),n.setMatrixAt(3,l.matrix),l.position.set(2.291,-.756,-2.621),l.rotation.set(0,-.286,0),l.scale.set(1.546,1.552,1.496),l.updateMatrix(),n.setMatrixAt(4,l.matrix),l.position.set(-2.193,-.369,-5.547),l.rotation.set(0,.516,0),l.scale.set(3.875,3.487,2.986),l.updateMatrix(),n.setMatrixAt(5,l.matrix),this.add(n);const h=new i.eaF(e,a(50));h.position.set(-16.116,14.37,8.208),h.scale.set(.1,2.428,2.739),this.add(h);const u=new i.eaF(e,a(50));u.position.set(-16.109,18.021,-8.207),u.scale.set(.1,2.425,2.751),this.add(u);const d=new i.eaF(e,a(17));d.position.set(14.904,12.198,-1.832),d.scale.set(.15,4.265,6.331),this.add(d);const c=new i.eaF(e,a(43));c.position.set(-.462,8.89,14.52),c.scale.set(4.38,5.441,.088),this.add(c);const f=new i.eaF(e,a(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);const m=new i.eaF(e,a(100));m.position.set(0,20,0),m.scale.set(1,.1,1),this.add(m)}dispose(){let e=new Set;for(let t of(this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))}),e))t.dispose()}}function a(e){return new i.G_z({color:0,emissive:0xffffff,emissiveIntensity:e})}},7137:(e,t,r)=>{r.d(t,{X:()=>o});var i=r(4910),s=r(948);let a={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class o extends s.o{constructor(){super(),this.isOutputPass=!0,this.uniforms=i.LlO.clone(a.uniforms),this.material=new i.D$Q({name:a.name,uniforms:this.uniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this._fsQuad=new s.F(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},i.ppV.getTransfer(this._outputColorSpace)===i.KLL&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===i.kyO?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===i.Mjd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===i.nNL?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===i.FV?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===i.LAk?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===i.aJ8?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===i.g7M&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),!0===this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}},8980:(e,t,r)=>{r.d(t,{j:()=>o});var i=r(4910);let s=new i.Pq0;function a(e,t,r,i,a,o){let n=2*Math.PI*a/4,l=Math.max(o-2*a,0),h=Math.PI/4;s.copy(t),s[i]=0,s.normalize();let u=.5*n/(n+l),d=1-s.angleTo(e)/h;return 1===Math.sign(s[r])?d*u:l/(n+l)+u+u*(1-d)}class o extends i.iNn{constructor(e=1,t=1,r=1,s=2,o=.1){const n=2*s+1;if(o=Math.min(e/2,t/2,r/2,o),super(1,1,1,n,n,n),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:r,segments:s,radius:o},1===n)return;const l=this.toNonIndexed();this.index=null,this.attributes.position=l.attributes.position,this.attributes.normal=l.attributes.normal,this.attributes.uv=l.attributes.uv;const h=new i.Pq0,u=new i.Pq0,d=new i.Pq0(e,t,r).divideScalar(2).subScalar(o),c=this.attributes.position.array,f=this.attributes.normal.array,m=this.attributes.uv.array,p=c.length/6,g=new i.Pq0,v=.5/n;for(let i=0,s=0;i<c.length;i+=3,s+=2)switch(h.fromArray(c,i),u.copy(h),u.x-=Math.sign(u.x)*v,u.y-=Math.sign(u.y)*v,u.z-=Math.sign(u.z)*v,u.normalize(),c[i+0]=d.x*Math.sign(h.x)+u.x*o,c[i+1]=d.y*Math.sign(h.y)+u.y*o,c[i+2]=d.z*Math.sign(h.z)+u.z*o,f[i+0]=u.x,f[i+1]=u.y,f[i+2]=u.z,Math.floor(i/p)){case 0:g.set(1,0,0),m[s+0]=a(g,u,"z","y",o,r),m[s+1]=1-a(g,u,"y","z",o,t);break;case 1:g.set(-1,0,0),m[s+0]=1-a(g,u,"z","y",o,r),m[s+1]=1-a(g,u,"y","z",o,t);break;case 2:g.set(0,1,0),m[s+0]=1-a(g,u,"x","z",o,e),m[s+1]=a(g,u,"z","x",o,r);break;case 3:g.set(0,-1,0),m[s+0]=1-a(g,u,"x","z",o,e),m[s+1]=1-a(g,u,"z","x",o,r);break;case 4:g.set(0,0,1),m[s+0]=1-a(g,u,"x","y",o,e),m[s+1]=1-a(g,u,"y","x",o,t);break;case 5:g.set(0,0,-1),m[s+0]=a(g,u,"x","y",o,e),m[s+1]=1-a(g,u,"y","x",o,t)}}static fromJSON(e){return new o(e.width,e.height,e.depth,e.segments,e.radius)}}},9159:(e,t,r)=>{r.d(t,{s:()=>h});var i=r(4910),s=r(2370),a=r(948);class o extends a.o{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof i.BKk?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=i.LlO.clone(e.uniforms),this.material=new i.BKk({name:void 0!==e.name?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new a.F(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?e.setRenderTarget(null):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil)),this._fsQuad.render(e)}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class n extends a.o{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){let i,s,a=e.getContext(),o=e.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0),this.inverse?(i=0,s=1):(i=1,s=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),o.buffers.stencil.setFunc(a.ALWAYS,i,0xffffffff),o.buffers.stencil.setClear(s),o.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(a.EQUAL,1,0xffffffff),o.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),o.buffers.stencil.setLocked(!0)}}class l extends a.o{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class h{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),void 0===t){const r=e.getSize(new i.I9Y);this._width=r.width,this._height=r.height,(t=new i.nWS(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:i.ix0})).texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new o(s.Z),this.copyPass.material.blending=i.XIg,this.timer=new i.M4G}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);-1!==t&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),void 0===e&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),r=!1;for(let t=0,i=this.passes.length;t<i;t++){let i=this.passes[t];if(!1!==i.enabled){if(i.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),i.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),i.needsSwap){if(r){let t=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(t.NOTEQUAL,1,0xffffffff),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),r.setFunc(t.EQUAL,1,0xffffffff)}this.swapBuffers()}void 0!==n&&(i instanceof n?r=!0:i instanceof l&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(void 0===e){let t=this.renderer.getSize(new i.I9Y);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,(e=this.renderTarget1.clone()).setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let r=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(r,i),this.renderTarget2.setSize(r,i);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(r,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}},9776:(e,t,r)=>{r.d(t,{A:()=>a});var i=r(4910),s=r(948);class a extends s.o{constructor(e,t,r=null,s=null,a=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=s,this.clearAlpha=a,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new i.Q1f}render(e,t,r){let i,s,a=e.autoClear;e.autoClear=!1,null!==this.overrideMaterial&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),null!==this.clearColor&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),null!==this.clearAlpha&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),!0==this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),!0===this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),null!==this.clearColor&&e.setClearColor(this._oldClearColor),null!==this.clearAlpha&&e.setClearAlpha(i),null!==this.overrideMaterial&&(this.scene.overrideMaterial=s),e.autoClear=a}}}}]);