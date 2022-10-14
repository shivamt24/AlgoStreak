/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        
        
        let minVersion = 0;
        let maxVersion = n;
        let minBestVersion = minVersion;
        while( minVersion < maxVersion ){
            let currentVersion = Math.round( ( minVersion + maxVersion )/2 );
            if( !isBadVersion(currentVersion) ){
                minBestVersion = currentVersion;
                minVersion = currentVersion;
            } else {
                maxVersion = currentVersion-1;
            }
        }
        return minBestVersion + 1;
        
    };
};