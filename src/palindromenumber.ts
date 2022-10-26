function isPalindrome(x: number): boolean {
  const normal = x.toString();
  const array = normal.split('');
  const arrayreverse = array.reverse();
  const inverso = arrayreverse.join('');
  let palindrome: boolean;

  if (normal === inverso) {
    return true;
  } else {
    return false;
  }
}
